import { useState, useEffect } from 'react';
import { Service } from '../types';
import { api } from '../services/api';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await api.getServices();
      setServices(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching services');
    } finally {
      setLoading(false);
    }
  };

  const createService = async (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newService = await api.createService(service);
      setServices(prev => [...prev, newService]);
      return newService;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error creating service');
    }
  };

  const updateService = async (id: string, service: Partial<Service>) => {
    try {
      const updatedService = await api.updateService(id, service);
      setServices(prev => prev.map(s => s.id === id ? updatedService : s));
      return updatedService;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error updating service');
    }
  };

  const deleteService = async (id: string) => {
    try {
      await api.deleteService(id);
      setServices(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error deleting service');
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    error,
    createService,
    updateService,
    deleteService,
    refetch: fetchServices,
  };
}; 