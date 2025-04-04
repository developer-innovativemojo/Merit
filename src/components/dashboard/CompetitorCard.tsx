
import React from 'react';
import { Check, AlertTriangle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CompetitorProps {
  competitor: {
    id: number;
    name: string;
    winRate: number;
    isIncumbent: boolean;
    threatLevel: 'high' | 'medium' | 'low';
    keyAgencies: string[];
    recentWins: number;
    recentLosses: number;
  };
}

const CompetitorCard: React.FC<CompetitorProps> = ({ competitor }) => {
  const getThreatIcon = () => {
    switch (competitor.threatLevel) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'low':
        return <AlertTriangle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getWinRateColor = () => {
    const winRate = competitor.winRate * 100;
    if (winRate >= 60) return 'text-red-600';
    if (winRate >= 40) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <div className="font-medium">{competitor.name}</div>
        <div className="flex flex-wrap gap-1.5">
          {competitor.isIncumbent && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 w-fit flex items-center gap-1">
              <Check className="h-3 w-3" /> Incumbent
            </Badge>
          )}
          <Badge variant="outline" className="w-fit">
            {competitor.keyAgencies.join(', ')}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          {getThreatIcon()}
          <span className="ml-1 text-sm whitespace-nowrap">
            {competitor.threatLevel.charAt(0).toUpperCase() + competitor.threatLevel.slice(1)} Threat
          </span>
        </div>
        
        <div className="text-right">
          <div className={`text-lg font-semibold ${getWinRateColor()}`}>
            {(competitor.winRate * 100).toFixed(0)}%
          </div>
          <div className="text-xs text-muted-foreground">Win rate</div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorCard;
