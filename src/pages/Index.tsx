
import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PlatformSelector from '@/components/PlatformSelector';
import DashboardStats from '@/components/DashboardStats';
import EngagementChart from '@/components/charts/EngagementChart';
import FollowersChart from '@/components/charts/FollowersChart';
import PostPerformanceChart from '@/components/charts/PostPerformanceChart';
import { Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-dashboard-gray">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-6 animate-in">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-dashboard-blue mb-1">Dashboard Overview</h1>
                <p className="text-gray-500">Monitor and analyze your social media performance</p>
              </div>
              
              <div className="flex items-center gap-3 mt-4 lg:mt-0">
                <div className="flex items-center border rounded-md bg-white px-2">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="border-0 p-2 w-36 shadow-none">
                      <SelectValue placeholder="Select Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                      <SelectItem value="12m">Last 12 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="gap-2">
                  <Download size={16} />
                  Export
                </Button>
                
                <SidebarTrigger className="lg:hidden" />
              </div>
            </div>
            
            <PlatformSelector 
              selectedPlatform={selectedPlatform} 
              onSelectPlatform={setSelectedPlatform} 
            />
            
            <DashboardStats selectedPlatform={selectedPlatform} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <EngagementChart selectedPlatform={selectedPlatform} />
              <FollowersChart selectedPlatform={selectedPlatform} />
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <PostPerformanceChart selectedPlatform={selectedPlatform} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
