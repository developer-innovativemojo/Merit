
import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface PageTemplateProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, description, icon, children }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary/10 rounded-full">
          {icon}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-secondary">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default PageTemplate;
