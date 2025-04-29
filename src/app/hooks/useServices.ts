/**
 * Hook para manejar el estado y la lógica de los servicios
 * 
 * Este hook se encarga de:
 * - Obtener la lista de servicios desde la API
 * - Manejar el estado de carga y errores
 * - Proporcionar funciones para crear, actualizar y eliminar servicios
 * 
 * La información se actualiza en:
 * - src/app/components/dashboard/ServiceList.tsx: Muestra la lista de servicios
 * - src/app/components/dashboard/ServiceForm.tsx: Formulario para crear/editar servicios
 */

import { useState, useEffect } from 'react';
import { Service } from '../types';
import { api } from '../services/api';

export const useServices = () => {
  // Estados para manejar la lista de servicios, carga y errores
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene la lista de servicios desde la API
   * Actualiza el estado con los servicios obtenidos
   * Maneja errores y estado de carga
   */
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

  /**
   * Crea un nuevo servicio
   * @param service - Datos del servicio a crear (sin id, createdAt y updatedAt)
   * @returns El servicio creado con todos sus datos
   */
  const createService = async (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newService = await api.createService(service);
      setServices(prev => [...prev, newService]);
      return newService;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error creating service');
    }
  };

  /**
   * Actualiza un servicio existente
   * @param id - ID del servicio a actualizar
   * @param service - Datos parciales del servicio a actualizar
   * @returns El servicio actualizado
   */
  const updateService = async (id: string, service: Partial<Service>) => {
    try {
      const updatedService = await api.updateService(id, service);
      setServices(prev => prev.map(s => s.id === id ? updatedService : s));
      return updatedService;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error updating service');
    }
  };

  /**
   * Elimina un servicio
   * @param id - ID del servicio a eliminar
   */
  const deleteService = async (id: string) => {
    try {
      await api.deleteService(id);
      setServices(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error deleting service');
    }
  };

  // Carga inicial de servicios al montar el componente
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