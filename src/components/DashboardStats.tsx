
import React from 'react';
import { Users, ThumbsUp, BarChart2, LineChart, TrendingUp, Share2 } from 'lucide-react';
import MetricCard from './MetricCard';
import { platformData, totalStats } from '@/data/mockData';

interface DashboardStatsProps {
  selectedPlatform: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ selectedPlatform }) => {
  const data = selectedPlatform === 'all' 
    ? totalStats 
    : platformData.find(p => p.id === selectedPlatform);

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <MetricCard
        title="Total Followers"
        value={data.followers.toLocaleString()}
        change={data.followerGrowth}
        icon={<Users size={20} />}
      />
      
      <MetricCard
        title="Engagement"
        value={data.engagement.toLocaleString()}
        change={data.followerGrowth > 0 ? data.followerGrowth * 0.8 : data.followerGrowth * 1.2}
        icon={<ThumbsUp size={20} />}
      />
      
      <MetricCard
        title="Engagement Rate"
        value={data.engagementRate.toFixed(1)}
        suffix="%"
        change={data.followerGrowth > 0 ? data.followerGrowth * 0.5 : data.followerGrowth * 0.7}
        icon={<TrendingUp size={20} />}
      />
      
      <MetricCard
        title="Posts"
        value={data.posts}
        icon={<Share2 size={20} />}
      />
      
      <MetricCard
        title="Impressions"
        value={`${(data.impressions / 1000).toFixed(1)}K`}
        change={data.followerGrowth > 0 ? data.followerGrowth * 1.1 : data.followerGrowth * 0.9}
        icon={<BarChart2 size={20} />}
      />
      
      <MetricCard
        title="Growth Trend"
        value={data.followerGrowth > 0 ? 'Positive' : 'Negative'}
        change={data.followerGrowth}
        icon={<LineChart size={20} />}
      />
    </div>
  );
};

export default DashboardStats;
