export interface Service {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface AnalyticsData {
  totalServices: number;
  activeServices: number;
  inactiveServices: number;
  monthlyGrowth: number;
  chartData: {
    labels: string[];
    values: number[];
  };
}

export interface Activity {
  id: string;
  type: 'service_created' | 'service_updated' | 'service_deleted';
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
}

export interface Schedule {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'completed' | 'cancelled';
} 