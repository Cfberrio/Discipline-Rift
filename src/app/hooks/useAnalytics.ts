/**
 * Hook para manejar el estado y la lógica de los análisis
 * 
 * Este hook se encarga de:
 * - Obtener los datos de análisis desde la API
 * - Manejar el estado de carga y errores
 * - Procesar los datos para su visualización
 * 
 * La información se actualiza en:
 * - src/app/components/dashboard/Analytics.tsx: Muestra gráficos y estadísticas
 * - src/app/components/dashboard/Dashboard.tsx: Resumen de métricas clave
 */

import { useState, useEffect } from 'react';
import { AnalyticsData } from '../types';
import { api } from '../services/api';

export const useAnalytics = () => {
  // Estados para manejar los datos de análisis, carga y errores
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene los datos de análisis desde la API
   * Actualiza el estado con los datos obtenidos
   * Maneja errores y estado de carga
   */
  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const data = await api.getAnalytics();
      setAnalytics(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching analytics');
    } finally {
      setLoading(false);
    }
  };

  // Carga inicial de datos de análisis al montar el componente
  useEffect(() => {
    fetchAnalytics();
  }, []);

  return {
    analytics,
    loading,
    error,
    refetch: fetchAnalytics,
  };
}; 