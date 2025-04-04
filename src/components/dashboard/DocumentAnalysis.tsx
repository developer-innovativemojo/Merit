
import React from 'react';
import { FileText, Upload, Search, Calendar, Download, FileX, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock data for documents
const recentDocuments = [
  {
    id: '1',
    name: 'VA Health Systems SOW.pdf',
    uploadDate: '2023-08-10',
    type: 'SOW',
    status: 'analyzed',
    size: '2.4 MB',
    keywords: ['health systems', 'EHR integration', 'patient data', 'security compliance'],
    partnersFound: 8
  },
  {
    id: '2',
    name: 'DHS Border Security RFI.pdf',
    uploadDate: '2023-08-05',
    type: 'RFI',
    status: 'analyzing',
    size: '3.8 MB',
    keywords: ['security systems', 'surveillance', 'biometrics', 'data processing'],
    progress: 65
  },
  {
    id: '3',
    name: 'DOD Cloud Migration PWS.docx',
    uploadDate: '2023-08-01',
    type: 'PWS',
    status: 'analyzed',
    size: '1.7 MB',
    keywords: ['cloud migration', 'security', 'DevSecOps', 'containerization'],
    partnersFound: 12
  }
];

const DocumentCard = ({ document }: { document: typeof recentDocuments[0] }) => {
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-sm transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-start">
            <div className="bg-gray-100 p-2 rounded">
              <FileText className="h-6 w-6 text-secondary" />
            </div>
            
            <div>
              <h3 className="font-medium text-secondary">{document.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  {document.type}
                </Badge>
                <span className="text-xs text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {document.uploadDate}
                </span>
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
        
        {document.status === 'analyzing' ? (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600">Analyzing document...</span>
              <span className="text-primary">{document.progress}%</span>
            </div>
            <Progress value={document.progress} className="h-1" />
          </div>
        ) : (
          <div className="mt-3">
            <div className="text-xs text-gray-500 mb-1">Key Terms</div>
            <div className="flex flex-wrap gap-1">
              {document.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700">
                  {keyword}
                </Badge>
              ))}
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-primary">{document.partnersFound}</span> matching partners
              </div>
              
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                View Matches
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DocumentAnalysis = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary">Document Analysis</h2>
        <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </Button>
      </div>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-gray-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg font-medium text-secondary mb-1">Upload SOW, RFI, or PWS for Analysis</h3>
              <p className="text-gray-500 mb-4">Our AI will extract key information and find the best partners for your opportunity</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-white flex-grow sm:flex-grow-0">
                  Upload Document
                </Button>
                <Button variant="outline" className="text-gray-600">
                  Browse Library
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-secondary mb-4">Recent Documents</h3>
        <div className="space-y-4">
          {recentDocuments.map(document => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalysis;
