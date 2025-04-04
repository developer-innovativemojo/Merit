
import React, { useState, useEffect, useRef } from 'react';
import { Separator } from '@/components/ui/separator';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Check, X, Info } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ComparisonProps {
  isVisible: boolean;
}

const ComparisonSection: React.FC<ComparisonProps> = ({ isVisible }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [titleInView, setTitleInView] = useState(false);
  const [tableInView, setTableInView] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !tableRef.current) return;
    
    // Observer for the title section
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleInView(true);
          console.log("Title section is now visible");
        }
      },
      { threshold: 0.3 }
    );
    
    // Observer for the table section
    const tableObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTableInView(true);
          console.log("Comparison table is now visible");
        }
      },
      { threshold: 0.1 }
    );
    
    titleObserver.observe(titleRef.current);
    tableObserver.observe(tableRef.current);
    
    return () => {
      titleObserver.disconnect();
      tableObserver.disconnect();
    };
  }, []);
  
  const isTitleVisible = isVisible && titleInView;
  const isTableVisible = isVisible && tableInView;

  const features = [
    {
      name: "AI-Driven Business & Talent Matching",
      merit: true,
      govWin: false,
      recruiting: false,
      intelligence: { value: "Limited", partial: true },
      crm: false,
      category: "AI & Matching"
    },
    {
      name: "Teaming & Subcontractor Discovery",
      merit: true,
      govWin: { value: "Partial", partial: true },
      recruiting: false,
      intelligence: false,
      crm: false,
      category: "Partnerships"
    },
    {
      name: "Internal & External Relationship-Based Matching",
      merit: true,
      govWin: false,
      recruiting: { value: "Limited", partial: true },
      intelligence: { value: "Limited", partial: true },
      crm: { value: "Limited", partial: true },
      category: "Relationships"
    },
    {
      name: "Dynamic Talent & Partner Scoring",
      merit: true,
      govWin: false,
      recruiting: false,
      intelligence: { value: "Limited", partial: true },
      crm: false,
      category: "AI & Matching"
    },
    {
      name: "Strategic Decision Support for BD & Hiring",
      merit: true,
      govWin: { value: "Partial", partial: true },
      recruiting: false,
      intelligence: true,
      crm: { value: "Partial", partial: true },
      category: "Strategy"
    },
    {
      name: "Predictive BD Intelligence & Market Insights",
      merit: true,
      govWin: { value: "Partial", partial: true },
      recruiting: false,
      intelligence: true,
      crm: { value: "Partial", partial: true },
      category: "Strategy"
    },
    {
      name: "Cross-Team Collaboration for BD, HR & Ops",
      merit: true,
      govWin: false,
      recruiting: false,
      intelligence: true,
      crm: true,
      category: "Collaboration"
    }
  ];

  const categories = [...new Set(features.map(feature => feature.category))];

  const columns = [
    { key: "merit", label: "MERIT", fullName: "MERIT" },
    { key: "govWin", label: "GovWin", fullName: "GovWin & Market Intelligence" },
    { key: "recruiting", label: "HR Platforms", fullName: "Recruiting & HR Platforms" },
    { key: "intelligence", label: "BI Tools", fullName: "Business Intelligence & Analytics" },
    { key: "crm", label: "CRM & BD", fullName: "CRM & BD Management" }
  ];

  const filteredFeatures = selectedCategory 
    ? features.filter(feature => feature.category === selectedCategory)
    : features;

  const tooltipContent = {
    limited: "Provides basic functionality but lacks comprehensive features and integration",
    partial: "Offers some functionality but not as comprehensive or integrated as a complete solution"
  };

  const renderValue = (value: any) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Check className="h-5 w-5 text-primary animate-pulse-subtle" />
        </div>
      );
    } else if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="h-5 w-5 text-red-400/70" />
        </div>
      );
    } else if (value && value.partial) {
      return (
        <div className="flex justify-center items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge 
                  variant="outline" 
                  className={`
                    ${value.value === "Limited" ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'} 
                    font-medium px-2 py-0.5 text-xs
                  `}
                >
                  {value.value}
                </Badge>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[200px] text-xs">
                {value.value === "Limited" ? tooltipContent.limited : tooltipContent.partial}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    }
    return null;
  };

  const getFeatureInfo = (featureName: string) => {
    const descriptions: Record<string, string> = {
      "AI-Driven Business & Talent Matching": "Uses advanced AI algorithms to match business opportunities with the right talent based on skills, experience, and project requirements.",
      "Teaming & Subcontractor Discovery": "Helps identify and connect with potential subcontractors and partners for project collaborations and bid responses.",
      "Internal & External Relationship-Based Matching": "Leverages existing relationships across your organization to identify the best connections for new opportunities.",
      "Dynamic Talent & Partner Scoring": "Provides real-time scoring of talent and partners based on performance, availability, and fit with specific requirements.",
      "Strategic Decision Support for BD & Hiring": "Offers data-driven insights to support strategic decisions for both business development and talent acquisition.",
      "Predictive BD Intelligence & Market Insights": "Delivers forward-looking intelligence about market trends and business development opportunities.",
      "Cross-Team Collaboration for BD, HR & Ops": "Enables seamless collaboration between business development, human resources, and operations teams."
    };
    
    return descriptions[featureName] || "Information about this feature is not available.";
  };

  const renderTableRow = (feature: any, index: number) => (
    <TableRow 
      key={index} 
      className={`opacity-0 ${isTableVisible ? 'animate-fadeIn' : ''} hover:bg-[#243241]/80 transition-colors border-b border-white/10`}
      style={{ 
        animationDelay: `${0.5 + (index * 0.3)}s`, 
        animationFillMode: 'forwards',
        animationDuration: '1s'
      }}
    >
      <TableCell className="font-medium text-white sticky left-0 z-10 bg-[#2A3543] border-b border-white/10 text-sm">
        <div className="flex items-center gap-2">
          <span>{feature.name}</span>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Info size={14} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 text-xs p-3 bg-[#2A3543] border border-white/10 text-white/90">
              {getFeatureInfo(feature.name)}
            </PopoverContent>
          </Popover>
        </div>
      </TableCell>
      {columns.map((column) => (
        <TableCell 
          key={column.key} 
          className={`text-center py-4 ${column.key === 'merit' ? 'bg-primary/10' : ''}`}
        >
          {renderValue(feature[column.key as keyof typeof feature])}
        </TableCell>
      ))}
    </TableRow>
  );

  const renderMobileView = () => (
    <div className="space-y-6">
      {filteredFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-[#2A3543] shadow-sm rounded-lg border border-white/10 p-4 opacity-0 ${isTableVisible ? 'animate-fadeIn' : ''}`}
          style={{ 
            animationDelay: `${1 + (index * 0.5)}s`, 
            animationFillMode: 'forwards',
            animationDuration: '2s'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-white text-sm">{feature.name}</h3>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <Info size={16} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72 text-xs p-3 bg-[#2A3543] border border-white/10 text-white/90">
                {getFeatureInfo(feature.name)}
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            {columns.map((column) => (
              <div key={column.key} className="bg-[#243241] p-2 rounded-md flex flex-col items-center">
                <span className="text-xs font-medium text-white/70 mb-2">
                  {column.label}
                </span>
                <div>{renderValue(feature[column.key as keyof typeof feature])}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderComparisonKey = () => (
    <div className={`mb-4 opacity-0 ${isTableVisible ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards', animationDuration: '1.5s' }}>
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-6 bg-[#2A3543]/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-white/10 text-sm">
          <div className="flex items-center gap-1.5">
            <Check size={16} className="text-primary" />
            <span className="text-white">Full feature</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">Partial</Badge>
            <span className="text-white">Some capability</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">Limited</Badge>
            <span className="text-white">Basic support</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabletView = () => (
    <>
      {renderComparisonKey()}
      <div className={`overflow-x-auto pb-6 hide-scrollbar rounded-lg shadow-sm border border-white/10 bg-[#2A3543] opacity-0 ${isTableVisible ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.7s', animationFillMode: 'forwards', animationDuration: '1.5s' }}>
        <div className="min-w-[800px]">
          <Table className="border-separate border-spacing-0">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px] text-white sticky left-0 bg-[#243241] z-20 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <span>Feature</span>
                    {categories.length > 0 && (
                      <select 
                        className="text-xs border border-white/20 rounded p-1 bg-[#1C2733] text-white"
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        value={selectedCategory || ""}
                      >
                        <option value="">All</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </TableHead>
                {columns.map((column) => (
                  <TableHead 
                    key={column.key} 
                    className={`text-white text-center border-b border-white/10 ${column.key === 'merit' ? 'bg-primary/10' : ''}`}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className={`${column.key === 'merit' ? 'font-bold text-primary' : 'font-medium'}`}>
                            {column.label}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs bg-[#243241] border-white/10 text-white">
                          {column.fullName}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFeatures.map((feature, index) => renderTableRow(feature, index))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );

  const renderDesktopView = () => (
    <>
      {renderComparisonKey()}
      <div className={`rounded-lg shadow-md border border-white/10 overflow-hidden bg-[#2A3543] opacity-0 ${isTableVisible ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.7s', animationFillMode: 'forwards', animationDuration: '1.5s' }}>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px] text-white border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Feature</span>
                  {categories.length > 0 && (
                    <select 
                      className="text-xs border border-white/20 rounded p-1 bg-[#1C2733] text-white"
                      onChange={(e) => setSelectedCategory(e.target.value || null)}
                      value={selectedCategory || ""}
                    >
                      <option value="">All</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  )}
                </div>
              </TableHead>
              {columns.map((column) => (
                <TableHead 
                  key={column.key} 
                  className={`text-white text-center border-b border-white/10 ${column.key === 'merit' ? 'bg-primary/15' : ''}`}
                >
                  {column.key === "merit" ? (
                    <span className="text-primary font-bold">{column.label}</span>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm text-white/90">{column.label}</span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-[#243241] border-white/10 text-white">
                          {column.fullName}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFeatures.map((feature, index) => renderTableRow(feature, index))}
          </TableBody>
        </Table>
      </div>
    </>
  );

  return (
    <div id="compare" className="mt-20 pt-8">
      <Separator className="mb-8 bg-white/10" />
      
      {/* Title Section - Separate container for title and description */}
      <div className="text-center mb-12" ref={titleRef}>
        <h2 
          className={`text-2xl md:text-3xl font-bold text-white mb-4 opacity-0 ${isTitleVisible ? 'animate-fadeIn' : ''}`} 
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards', animationDuration: '1.2s' }}
        >
          How <span className="text-primary">MERIT</span> Compares to Market Alternatives
        </h2>
        <p 
          className={`text-white/80 max-w-2xl mx-auto opacity-0 ${isTitleVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards', animationDuration: '1.2s' }}
        >
          MERIT provides a comprehensive solution for business development and talent management that addresses gaps in existing market offerings.
        </p>
      </div>
      
      {/* Table Section - Separate container for comparison table and key */}
      <div className="comparison-table-container" ref={tableRef}>
        {isMobile ? renderMobileView() : isTablet ? renderTabletView() : renderDesktopView()}
      </div>
    </div>
  );
};

export default ComparisonSection;
