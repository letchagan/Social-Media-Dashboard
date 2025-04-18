
import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-dashboard-blue">Social Pulse</h1>
        <span className="text-sm bg-dashboard-purple text-white px-2 py-0.5 rounded">Analytics</span>
      </div>
      
      <div className="relative w-1/3 mx-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          type="text"
          placeholder="Search" 
          className="pl-10 border border-gray-200 focus:border-dashboard-light-blue focus-visible:ring-dashboard-light-blue"
        />
      </div>
      
      <div className="flex items-center gap-5">
        <Button variant="ghost" className="relative" size="icon">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-dashboard-red rounded-full"></span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-dashboard-light-purple flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@socialpulse.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
