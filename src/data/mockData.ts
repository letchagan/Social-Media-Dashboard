
export interface PlatformData {
  id: string;
  name: string;
  icon: string;
  color: string;
  followers: number;
  followerGrowth: number;
  engagement: number;
  engagementRate: number;
  posts: number;
  impressions: number;
  clicks: number;
  likes: number;
  shares: number;
  comments: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface EngagementData {
  platform: string;
  data: ChartDataPoint[];
}

export interface FollowersData {
  platform: string;
  data: ChartDataPoint[];
}

export interface PostPerformanceData {
  id: string;
  platform: string;
  date: string;
  likes: number;
  shares: number;
  comments: number;
  impressions: number;
}

// Platform data
export const platformData: PlatformData[] = [
  {
    id: "twitter",
    name: "Twitter",
    icon: "twitter",
    color: "#1DA1F2",
    followers: 12540,
    followerGrowth: 3.2,
    engagement: 1260,
    engagementRate: 2.8,
    posts: 45,
    impressions: 45200,
    clicks: 1255,
    likes: 3240,
    shares: 1560,
    comments: 620
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    color: "#E1306C",
    followers: 24680,
    followerGrowth: 5.6,
    engagement: 3420,
    engagementRate: 4.2,
    posts: 38,
    impressions: 86700,
    clicks: 2450,
    likes: 7890,
    shares: 1230,
    comments: 1540
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "facebook",
    color: "#4267B2",
    followers: 18320,
    followerGrowth: -1.4,
    engagement: 1520,
    engagementRate: 1.9,
    posts: 32,
    impressions: 52400,
    clicks: 980,
    likes: 2350,
    shares: 1750,
    comments: 890
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin",
    color: "#0077B5",
    followers: 8640,
    followerGrowth: 2.8,
    engagement: 780,
    engagementRate: 2.2,
    posts: 22,
    impressions: 19800,
    clicks: 680,
    likes: 1270,
    shares: 540,
    comments: 320
  }
];

// Engagement data for last 30 days
export const engagementData: EngagementData[] = [
  {
    platform: "Twitter",
    data: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2023, 3, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 200) + 800
    }))
  },
  {
    platform: "Instagram",
    data: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2023, 3, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 400) + 1600
    }))
  },
  {
    platform: "Facebook",
    data: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2023, 3, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 300) + 1000
    }))
  },
  {
    platform: "LinkedIn",
    data: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2023, 3, i + 1).toISOString().split('T')[0],
      value: Math.floor(Math.random() * 150) + 500
    }))
  }
];

// Followers data for last 12 months
export const followersData: FollowersData[] = [
  {
    platform: "Twitter",
    data: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2023, i, 1).toISOString().split('T')[0],
      value: 10000 + Math.floor(Math.random() * 500) * (i + 1)
    }))
  },
  {
    platform: "Instagram",
    data: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2023, i, 1).toISOString().split('T')[0],
      value: 18000 + Math.floor(Math.random() * 800) * (i + 1)
    }))
  },
  {
    platform: "Facebook",
    data: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2023, i, 1).toISOString().split('T')[0],
      value: 16000 + Math.floor(Math.random() * 300) * (i + 1) - (i > 8 ? 1000 : 0)
    }))
  },
  {
    platform: "LinkedIn",
    data: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2023, i, 1).toISOString().split('T')[0],
      value: 6000 + Math.floor(Math.random() * 400) * (i + 1)
    }))
  }
];

// Recent posts data
export const postPerformanceData: PostPerformanceData[] = Array.from({ length: 20 }, (_, i) => ({
  id: `post-${i + 1}`,
  platform: ["Twitter", "Instagram", "Facebook", "LinkedIn"][Math.floor(Math.random() * 4)],
  date: new Date(2023, 3, 30 - i).toISOString().split('T')[0],
  likes: Math.floor(Math.random() * 300) + 50,
  shares: Math.floor(Math.random() * 100) + 10,
  comments: Math.floor(Math.random() * 50) + 5,
  impressions: Math.floor(Math.random() * 2000) + 500
}));

// Total stats across all platforms
export const totalStats = {
  followers: platformData.reduce((sum, platform) => sum + platform.followers, 0),
  followerGrowth: platformData.reduce((sum, platform) => sum + platform.followerGrowth, 0) / platformData.length,
  engagement: platformData.reduce((sum, platform) => sum + platform.engagement, 0),
  engagementRate: platformData.reduce((sum, platform) => sum + platform.engagementRate, 0) / platformData.length,
  posts: platformData.reduce((sum, platform) => sum + platform.posts, 0),
  impressions: platformData.reduce((sum, platform) => sum + platform.impressions, 0)
};
