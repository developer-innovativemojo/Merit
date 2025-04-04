
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Building2, ArrowRight, CircleCheck } from 'lucide-react';
import companiesData from '@/data/companies.json';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Company {
  id: string;
  name: string;
  duns: string;
  cage: string;
  uei: string;
  naics: string;
  employees: number;
  location: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  entityStructure: string;
  yearFounded: number;
  annualRevenue: string;
  certifications: string[];
  website: string;
  industry: string;
}

interface CompanySearchProps {
  onSelect?: (company: Company) => void;
}

const CompanySearch: React.FC<CompanySearchProps> = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const navigate = useNavigate();

  // Debounce search query for real-time results
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery?.length >= 2) {
        setDebouncedQuery(searchQuery);
      } else if (searchQuery === '') {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery?.length >= 2) {
      handleSearch();
    }
  }, [debouncedQuery]);

  const handleSearch = () => {
    if (searchQuery?.trim() === '') return;
    
    setIsSearching(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = companiesData.filter(company => 
        company.name.toLowerCase().includes(query) ||
        company.duns.includes(query) ||
        company.cage.toLowerCase().includes(query) ||
        company.website.toLowerCase().includes(query)
      );
      
      // Sort results by relevance (exact matches first)
      results.sort((a, b) => {
        // Exact name match gets highest priority
        if (a.name.toLowerCase() === query) return -1;
        if (b.name.toLowerCase() === query) return 1;
        
        // Starts with gets second priority
        if (a.name.toLowerCase().startsWith(query)) return -1;
        if (b.name.toLowerCase().startsWith(query)) return 1;
        
        // Contains gets third priority
        return a.name.toLowerCase().indexOf(query) - b.name.toLowerCase().indexOf(query);
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 400);
  };

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setSearchResults([]);
    
    if (onSelect) {
      onSelect(company);
    }
  };

  const handleContinue = () => {
    if (selectedCompany) {
      navigate('/signup/company-details', { state: { company: selectedCompany } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Calculate match confidence score (simplified example)
  const getMatchConfidence = (company: Company): 'high' | 'medium' | 'low' => {
    const query = searchQuery.toLowerCase();
    
    if (company.name.toLowerCase() === query || 
        company.duns === query || 
        company.cage.toLowerCase() === query) {
      return 'high';
    }
    
    if (company.name.toLowerCase().startsWith(query)) {
      return 'medium';
    }
    
    return 'low';
  };
  
  const getConfidenceColor = (confidence: 'high' | 'medium' | 'low') => {
    switch (confidence) {
      case 'high':
        return 'bg-green-50 text-green-600';
      case 'medium':
        return 'bg-blue-50 text-blue-600';
      case 'low':
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="company-search" className="block text-sm font-medium text-secondary mb-1">
          Search by Company Name, DUNS, or CAGE Code
        </label>
        <div className="relative">
          <Input
            id="company-search"
            placeholder="Enter company name, DUNS, or CAGE code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/50" />
          <Button 
            onClick={handleSearch}
            disabled={isSearching || searchQuery.trim() === ''}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedCompany && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 border border-primary/20 rounded-md bg-primary/5 mb-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-secondary">{selectedCompany.name}</h3>
                <div className="text-sm text-secondary/70 mt-1">
                  <p>DUNS: {selectedCompany.duns} | CAGE: {selectedCompany.cage}</p>
                  <p>{selectedCompany.location} | {selectedCompany.employees} Employees</p>
                </div>
                {selectedCompany.certifications.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {selectedCompany.certifications.map((cert, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex justify-end">
                  <Button 
                    onClick={handleContinue}
                    size="sm"
                    className="flex items-center"
                  >
                    Continue <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {searchResults.length > 0 && !selectedCompany && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border border-gray-200 rounded-md divide-y max-h-64 overflow-y-auto"
          >
            {searchResults.map((company) => {
              const confidence = getMatchConfidence(company);
              
              return (
                <motion.div 
                  key={company.id} 
                  className="p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleCompanySelect(company)}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Building2 className="h-5 w-5 text-secondary/70" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-secondary">{company.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getConfidenceColor(confidence)}`}>
                          {confidence === 'high' && <CircleCheck className="inline-block mr-1 h-3 w-3" />}
                          {confidence.charAt(0).toUpperCase() + confidence.slice(1)} match
                        </span>
                      </div>
                      <div className="text-sm text-secondary/70">
                        <p>DUNS: {company.duns} | CAGE: {company.cage}</p>
                        <p>{company.location} | Industry: {company.industry}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {searchResults.length === 0 && searchQuery && !isSearching && !selectedCompany && (
        <div className="text-center py-6 text-secondary/70">
          <p>No companies found matching your search criteria.</p>
          <p className="mt-1 text-sm">Try searching by company name, DUNS number, or CAGE code.</p>
        </div>
      )}
    </div>
  );
};

export default CompanySearch;
