import { useState, useEffect } from 'react';
import { Schedule } from '../types';
import { api } from '../services/api';

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSchedule = async () => {
    try {
      setLoading(true);
      const data = await api.getSchedule();
      setSchedule(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching schedule');
    } finally {
      setLoading(false);
    }
  };

  const createSchedule = async (newSchedule: Omit<Schedule, 'id'>) => {
    try {
      const created = await api.createSchedule(newSchedule);
      setSchedule(prev => [...prev, created]);
      return created;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error creating schedule');
    }
  };

  const updateSchedule = async (id: string, updatedSchedule: Partial<Schedule>) => {
    try {
      const updated = await api.updateSchedule(id, updatedSchedule);
      setSchedule(prev => prev.map(s => s.id === id ? updated : s));
      return updated;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error updating schedule');
    }
  };

  const deleteSchedule = async (id: string) => {
    try {
      await api.deleteSchedule(id);
      setSchedule(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error deleting schedule');
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return {
    schedule,
    loading,
    error,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    refetch: fetchSchedule,
  };
}; 