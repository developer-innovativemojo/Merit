
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const AIMatchingPromo = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="p-3 md:p-4 bg-white rounded-full shrink-0">
            <Brain className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-2">AI-Powered Team Matching</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Upload opportunity documents and instantly find the best matching partners for your team.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="secondary" className="bg-white text-gray-800">Instant Matching</Badge>
              <Badge variant="secondary" className="bg-white text-gray-800">Requirements Analysis</Badge>
              <Badge variant="secondary" className="bg-white text-gray-800">Capability Alignment</Badge>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/teaming-dashboard')} 
            className="bg-primary hover:bg-primary/90 px-4 md:px-6 mt-3 md:mt-0 shrink-0"
          >
            Start AI Matching <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIMatchingPromo;
