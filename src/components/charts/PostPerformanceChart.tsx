
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { postPerformanceData } from '@/data/mockData';

interface PostPerformanceChartProps {
  selectedPlatform: string;
}

const PostPerformanceChart: React.FC<PostPerformanceChartProps> = ({ selectedPlatform }) => {
  // Filter data based on selected platform
  const filteredData = selectedPlatform === 'all' 
    ? postPerformanceData 
    : postPerformanceData.filter(post => post.platform.toLowerCase() === selectedPlatform);

  // Get the latest 5 posts
  const chartData = filteredData.slice(0, 5).map(post => ({
    id: post.id,
    date: post.date,
    Likes: post.likes,
    Shares: post.shares,
    Comments: post.comments
  }));

  if (!chartData || chartData.length === 0) return null;

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-4">Recent Post Performance</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getDate()}/${date.getMonth() + 1}`;
            }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number, name: string) => [value.toLocaleString(), name]}
            labelFormatter={(value) => {
              const date = new Date(value);
              return `Post from ${date.toLocaleDateString()}`;
            }}
          />
          <Legend />
          <Bar dataKey="Likes" fill="#3B82F6" />
          <Bar dataKey="Shares" fill="#A78BFA" />
          <Bar dataKey="Comments" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostPerformanceChart;
