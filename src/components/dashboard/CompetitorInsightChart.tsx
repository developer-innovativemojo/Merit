
import React, { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, LabelList } from 'recharts';
import { Info, ArrowUp, ArrowDown, ChevronRight } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface InsightChartProps {
  data: Array<{
    name: string;
    value: number;
    isYourCompany?: boolean;
    isIncumbent?: boolean;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: number;
  }>;
  agency: string;
}

const CompetitorInsightChart: React.FC<InsightChartProps> = ({ data, agency }) => {
  // Calculate the industry average
  const industryAverage = useMemo(() => {
    const sum = data.reduce((acc, item) => acc + item.value, 0);
    return Math.round((sum / data.length) * 10) / 10;
  }, [data]);
  
  // Sort data by performance score in descending order
  const chartData = useMemo(() => {
    return [...data].sort((a, b) => b.value - a.value);
  }, [data]);
  
  const chartConfig = {
    performance: {
      label: 'Performance Score',
      color: "#8B5CF6", // Default color
    },
    yourCompany: {
      label: 'Your Company',
      color: "#50B94B", // Green for your company - using MERIT brand color
    },
    other: {
      label: 'Competitor',
      color: "#94A3B8", // Neutral gray for competitors
    },
    incumbent: {
      label: 'Incumbent',
      color: "#64748B", // Darker gray for incumbent
    }
  };
  
  // Key insights based on data analysis
  const keyInsights = useMemo(() => {
    const strongestCompetitor = chartData[0];
    const yourCompany = chartData.find(item => item.isYourCompany);
    const weakestCompetitor = chartData[chartData.length - 1];
    const potentialPartners = chartData.filter(item => 
      !item.isYourCompany && item.value < (yourCompany?.value || 0) && item.value > 40
    );
    
    return {
      strongestCompetitor: strongestCompetitor?.name || 'None',
      yourPosition: yourCompany 
        ? `${chartData.findIndex(item => item.isYourCompany) + 1} of ${chartData.length}` 
        : 'N/A',
      potentialPartners: potentialPartners.map(p => p.name).join(', ') || 'None identified',
      competitiveEdge: yourCompany && strongestCompetitor 
        ? yourCompany.value > strongestCompetitor.value 
          ? 'Leading the industry' 
          : yourCompany.value > industryAverage 
            ? 'Above average' 
            : 'Below average'
        : 'N/A'
    };
  }, [chartData, industryAverage]);

  // Custom tooltip component
  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const item = props.payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-md shadow-md">
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm">Performance Score: <span className="font-medium">{item.value}</span></p>
          {item.isIncumbent && (
            <Badge variant="outline" className="mt-1">Incumbent</Badge>
          )}
          {item.trend && (
            <div className="flex items-center gap-1 mt-1 text-xs">
              <span>Trend:</span>
              {item.trend === 'up' && (
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="h-3 w-3" /> +{item.trendValue || 0}%
                </span>
              )}
              {item.trend === 'down' && (
                <span className="text-red-500 flex items-center">
                  <ArrowDown className="h-3 w-3" /> -{item.trendValue || 0}%
                </span>
              )}
              {item.trend === 'neutral' && (
                <span className="text-gray-500">No change</span>
              )}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Function to determine bar fill based on company type
  const getBarProps = (entry: any) => {
    if (entry.isYourCompany) {
      return {
        fill: chartConfig.yourCompany.color,
        stroke: "#18A34A",
        strokeWidth: 1
      };
    } else if (entry.isIncumbent) {
      return {
        fill: chartConfig.incumbent.color,
        stroke: "#475569",
        strokeWidth: 1
      };
    } else {
      return {
        fill: chartConfig.other.color
      };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <h3 className="text-base font-medium">Agency Performance Comparison</h3>
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger asChild>
                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                Performance scores based on win rate, contract value, and past performance ratings at {agency}
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: chartConfig.yourCompany.color }}></div>
            <span>Your Company</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: chartConfig.other.color }}></div>
            <span>Competitor</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-sm border" style={{ backgroundColor: chartConfig.incumbent.color, borderColor: "#475569" }}></div>
            <span>Incumbent</span>
          </div>
        </div>
      </div>
      
      {/* Fixed height container with proper overflow handling - increased height and added margin bottom */}
      <div className="w-full h-[300px] mb-8 overflow-hidden">
        <div className="w-full h-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%" className="w-full h-full">
              <BarChart 
                data={chartData} 
                layout="vertical"
                margin={{ top: 5, right: 60, left: 100, bottom: 30 }}
                className="overflow-visible"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  type="number" 
                  domain={[0, 100]} 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={{ stroke: '#e2e8f0' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine 
                  x={industryAverage} 
                  stroke="#94a3b8" 
                  strokeWidth={1}
                  label={{ 
                    value: "Industry avg", 
                    position: 'top', 
                    fill: '#64748b', 
                    fontSize: 10,
                    offset: 10
                  }}
                />
                <Bar 
                  dataKey="value" 
                  name="Performance Score"
                  radius={[0, 4, 4, 0]}
                  animationDuration={500}
                  isAnimationActive={true}
                >
                  {chartData.map((entry, index) => (
                    <rect 
                      key={`rect-${index}`} 
                      {...getBarProps(entry)}
                      className="transition-all duration-300 hover:opacity-90"
                    />
                  ))}
                  <LabelList 
                    dataKey="value" 
                    position="right" 
                    style={{ fontSize: '11px', fill: '#64748B' }}
                    formatter={(value: number) => `${value}`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Key insights section with improved spacing and grid layout */}
      <div className="p-4 border rounded-md bg-slate-50">
        <h4 className="text-sm font-semibold mb-3 flex items-center">
          Key Insights
          {agency !== "TopAgencies" && (
            <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
              {agency}
            </span>
          )}
          {agency === "TopAgencies" && (
            <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded">
              Top Performing Agencies
            </span>
          )}
        </h4>
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6">
          <div className="pb-3 sm:pb-0 sm:pr-3 border-b sm:border-b-0 sm:border-r border-slate-200">
            <p className="text-xs font-medium text-slate-500">Strongest Competitor</p>
            <p className="text-sm mt-1">{keyInsights.strongestCompetitor}</p>
          </div>
          
          <div className="pt-3 sm:pt-0 sm:pl-3">
            <p className="text-xs font-medium text-slate-500">Your Position</p>
            <p className="text-sm mt-1">{keyInsights.yourPosition}</p>
          </div>
          
          <div className="pt-3 border-t sm:border-t-0 pb-3 sm:pb-0 sm:pr-3 sm:border-r border-slate-200">
            <p className="text-xs font-medium text-slate-500">Potential Partners</p>
            <p className="text-sm mt-1 truncate" title={keyInsights.potentialPartners}>
              {keyInsights.potentialPartners}
            </p>
          </div>
          
          <div className="pt-3 sm:pt-0 sm:pl-3">
            <p className="text-xs font-medium text-slate-500">Competitive Edge</p>
            <div className="mt-1">
              <Badge variant={
                keyInsights.competitiveEdge === 'Leading the industry' 
                  ? 'secondary' 
                  : keyInsights.competitiveEdge === 'Above average' 
                  ? 'outline' 
                  : 'destructive'
              }>
                {keyInsights.competitiveEdge}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-200">
          <Button variant="link" size="sm" className="h-auto p-0 flex items-center text-primary">
            View Detailed Analysis <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompetitorInsightChart;
