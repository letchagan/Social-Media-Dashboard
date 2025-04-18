
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { engagementData } from '@/data/mockData';

interface EngagementChartProps {
  selectedPlatform: string;
}

const EngagementChart: React.FC<EngagementChartProps> = ({ selectedPlatform }) => {
  const platformColors = {
    Twitter: "#1DA1F2",
    Instagram: "#E1306C",
    Facebook: "#4267B2",
    LinkedIn: "#0077B5"
  };

  // Filter data based on selected platform
  const chartData = engagementData.filter(item => 
    selectedPlatform === 'all' || 
    item.platform.toLowerCase() === selectedPlatform
  );

  // Process data for the chart
  const processedData = chartData[0]?.data.map((item, index) => {
    const dataPoint: any = { date: item.date };
    
    chartData.forEach(platform => {
      dataPoint[platform.platform] = platform.data[index]?.value || 0;
    });
    
    return dataPoint;
  });

  if (!processedData || processedData.length === 0) return null;

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-4">Engagement Trends (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={processedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getDate()}/${date.getMonth() + 1}`;
            }}
            interval={Math.floor(processedData.length / 6)}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value: number) => [`${value.toLocaleString()}`, 'Engagement']}
            labelFormatter={(value) => {
              const date = new Date(value);
              return `${date.toLocaleDateString()}`;
            }}
          />
          <Legend />
          {chartData.map(platform => (
            <Line
              key={platform.platform}
              type="monotone"
              dataKey={platform.platform}
              stroke={platformColors[platform.platform as keyof typeof platformColors] || "#8884d8"}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngagementChart;
