
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  prefix,
  suffix,
  icon,
  className,
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <div className={cn("metric-card", className)}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        {icon && <div className="text-dashboard-light-blue">{icon}</div>}
      </div>
      
      <div className="flex items-baseline">
        {prefix && <span className="text-sm text-gray-500 mr-1">{prefix}</span>}
        <span className="text-2xl font-bold">{value}</span>
        {suffix && <span className="text-sm text-gray-500 ml-1">{suffix}</span>}
      </div>
      
      {typeof change !== 'undefined' && (
        <div className="flex items-center mt-2">
          {isPositive ? (
            <div className="flex items-center text-dashboard-teal">
              <ArrowUp size={16} />
              <span className="text-xs font-medium ml-1">+{Math.abs(change)}%</span>
            </div>
          ) : isNegative ? (
            <div className="flex items-center text-dashboard-red">
              <ArrowDown size={16} />
              <span className="text-xs font-medium ml-1">-{Math.abs(change)}%</span>
            </div>
          ) : (
            <span className="text-xs font-medium text-gray-500">No change</span>
          )}
          <span className="text-xs text-gray-500 ml-2">vs. last period</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
