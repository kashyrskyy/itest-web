// src/hooks/useWeatherData.ts
import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weatherAPI';
import { WeatherData } from '../types/weatherTypes';

export const useWeatherData = (location: string, startDate: string, endDate: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchWeatherData(location, startDate, endDate);
        setData(result);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    if (location && startDate && endDate) {
      fetchData();
    }
  }, [location, startDate, endDate]);

  return { data, loading, error };
};