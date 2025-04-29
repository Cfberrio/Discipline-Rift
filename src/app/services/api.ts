import { Service, AnalyticsData, Activity, Schedule } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const api = {
  // Servicios
  getServices: async (): Promise<Service[]> => {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) throw new Error('Error fetching services');
    return response.json();
  },

  getService: async (id: string): Promise<Service> => {
    const response = await fetch(`${API_BASE_URL}/services/${id}`);
    if (!response.ok) throw new Error('Error fetching service');
    return response.json();
  },

  createService: async (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>): Promise<Service> => {
    const response = await fetch(`${API_BASE_URL}/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service),
    });
    if (!response.ok) throw new Error('Error creating service');
    return response.json();
  },

  updateService: async (id: string, service: Partial<Service>): Promise<Service> => {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service),
    });
    if (!response.ok) throw new Error('Error updating service');
    return response.json();
  },

  deleteService: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting service');
  },

  // Analytics
  getAnalytics: async (): Promise<AnalyticsData> => {
    const response = await fetch(`${API_BASE_URL}/analytics`);
    if (!response.ok) throw new Error('Error fetching analytics');
    return response.json();
  },

  // Actividades
  getActivities: async (): Promise<Activity[]> => {
    const response = await fetch(`${API_BASE_URL}/activities`);
    if (!response.ok) throw new Error('Error fetching activities');
    return response.json();
  },

  // Agenda
  getSchedule: async (): Promise<Schedule[]> => {
    const response = await fetch(`${API_BASE_URL}/schedule`);
    if (!response.ok) throw new Error('Error fetching schedule');
    return response.json();
  },

  createSchedule: async (schedule: Omit<Schedule, 'id'>): Promise<Schedule> => {
    const response = await fetch(`${API_BASE_URL}/schedule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(schedule),
    });
    if (!response.ok) throw new Error('Error creating schedule');
    return response.json();
  },

  updateSchedule: async (id: string, schedule: Partial<Schedule>): Promise<Schedule> => {
    const response = await fetch(`${API_BASE_URL}/schedule/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(schedule),
    });
    if (!response.ok) throw new Error('Error updating schedule');
    return response.json();
  },

  deleteSchedule: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/schedule/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error deleting schedule');
  },
}; 