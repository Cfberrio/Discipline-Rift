/**
 * Hook para manejar el estado y la lógica de las actividades
 * 
 * Este hook se encarga de:
 * - Obtener el feed de actividades desde la API
 * - Manejar el estado de carga y errores
 * - Proporcionar funciones para crear y gestionar actividades
 * 
 * La información se actualiza en:
 * - src/app/components/dashboard/ActivityFeed.tsx: Muestra el feed de actividades
 * - src/app/components/dashboard/ActivityForm.tsx: Formulario para crear actividades
 */

import { useState, useEffect } from 'react';
import { Activity } from '../types';
import { api } from '../services/api';

export const useActivities = () => {
  // Estados para manejar la lista de actividades, carga y errores
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene la lista de actividades desde la API
   * Actualiza el estado con las actividades obtenidas
   * Maneja errores y estado de carga
   */
  const fetchActivities = async () => {
    try {
      setLoading(true);
      const data = await api.getActivities();
      setActivities(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching activities');
    } finally {
      setLoading(false);
    }
  };

  // Carga inicial de actividades al montar el componente
  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities,
  };
}; 