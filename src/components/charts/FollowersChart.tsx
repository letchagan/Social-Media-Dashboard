
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { followersData } from '@/data/mockData';

interface FollowersChartProps {
  selectedPlatform: string;
}

const FollowersChart: React.FC<FollowersChartProps> = ({ selectedPlatform }) => {
  const platformColors = {
    Twitter: { stroke: "#1DA1F2", fill: "rgba(29, 161, 242, 0.1)" },
    Instagram: { stroke: "#E1306C", fill: "rgba(225, 48, 108, 0.1)" },
    Facebook: { stroke: "#4267B2", fill: "rgba(66, 103, 178, 0.1)" },
    LinkedIn: { stroke: "#0077B5", fill: "rgba(0, 119, 181, 0.1)" }
  };

  // Filter data based on selected platform
  const chartData = followersData.filter(item => 
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

  const getMonthName = (dateStr: string) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateStr);
    return months[date.getMonth()];
  };

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-4">Followers Growth (Last 12 Months)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={processedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => getMonthName(value)}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value: number) => [`${value.toLocaleString()}`, 'Followers']}
            labelFormatter={(value) => {
              const date = new Date(value);
              return `${date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}`;
            }}
          />
          <Legend />
          {chartData.map(platform => (
            <Area
              key={platform.platform}
              type="monotone"
              dataKey={platform.platform}
              stroke={platformColors[platform.platform as keyof typeof platformColors]?.stroke || "#8884d8"}
              fill={platformColors[platform.platform as keyof typeof platformColors]?.fill || "rgba(136, 132, 216, 0.1)"}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FollowersChart;
