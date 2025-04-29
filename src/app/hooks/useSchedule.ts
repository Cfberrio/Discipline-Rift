/**
 * Hook para manejar el estado y la lógica de los horarios
 * 
 * Este hook se encarga de:
 * - Obtener los horarios desde la API
 * - Manejar el estado de carga y errores
 * - Proporcionar funciones para crear, actualizar y eliminar horarios
 * 
 * La información se actualiza en:
 * - src/app/components/dashboard/Schedule.tsx: Muestra el calendario y horarios
 * - src/app/components/dashboard/ScheduleForm.tsx: Formulario para crear/editar horarios
 */

import { useState, useEffect } from 'react';
import { Schedule } from '../types';
import { api } from '../services/api';

export const useSchedule = () => {
  // Estados para manejar la lista de horarios, carga y errores
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene la lista de horarios desde la API
   * Actualiza el estado con los horarios obtenidos
   * Maneja errores y estado de carga
   */
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

  /**
   * Crea un nuevo horario
   * @param newSchedule - Datos del horario a crear (sin id)
   * @returns El horario creado con todos sus datos
   */
  const createSchedule = async (newSchedule: Omit<Schedule, 'id'>) => {
    try {
      const created = await api.createSchedule(newSchedule);
      setSchedule(prev => [...prev, created]);
      return created;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error creating schedule');
    }
  };

  /**
   * Actualiza un horario existente
   * @param id - ID del horario a actualizar
   * @param updatedSchedule - Datos parciales del horario a actualizar
   * @returns El horario actualizado
   */
  const updateSchedule = async (id: string, updatedSchedule: Partial<Schedule>) => {
    try {
      const updated = await api.updateSchedule(id, updatedSchedule);
      setSchedule(prev => prev.map(s => s.id === id ? updated : s));
      return updated;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error updating schedule');
    }
  };

  /**
   * Elimina un horario
   * @param id - ID del horario a eliminar
   */
  const deleteSchedule = async (id: string) => {
    try {
      await api.deleteSchedule(id);
      setSchedule(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error deleting schedule');
    }
  };

  // Carga inicial de horarios al montar el componente
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