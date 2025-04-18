
import React from 'react';
import { Check, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ 
  selectedPlatform, 
  onSelectPlatform 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Platforms</h2>
      <Tabs defaultValue={selectedPlatform} onValueChange={onSelectPlatform}>
        <TabsList className="grid grid-cols-5 mb-2">
          <TabsTrigger value="all" className={cn("data-[state=active]:bg-dashboard-blue data-[state=active]:text-white")}>
            All
          </TabsTrigger>
          <TabsTrigger value="twitter" className={cn("data-[state=active]:bg-[#1DA1F2] data-[state=active]:text-white")}>
            <Twitter size={18} className="mr-2" />
            Twitter
          </TabsTrigger>
          <TabsTrigger value="instagram" className={cn("data-[state=active]:bg-[#E1306C] data-[state=active]:text-white")}>
            <Instagram size={18} className="mr-2" />
            Instagram
          </TabsTrigger>
          <TabsTrigger value="facebook" className={cn("data-[state=active]:bg-[#4267B2] data-[state=active]:text-white")}>
            <Facebook size={18} className="mr-2" />
            Facebook
          </TabsTrigger>
          <TabsTrigger value="linkedin" className={cn("data-[state=active]:bg-[#0077B5] data-[state=active]:text-white")}>
            <Linkedin size={18} className="mr-2" />
            LinkedIn
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PlatformSelector;
