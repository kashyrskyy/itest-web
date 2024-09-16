// src/api/weatherAPI.ts
import axios from 'axios';

const HOURLY_PARAMS = 'temperature_2m,relative_humidity_2m,precipitation,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,et0_fao_evapotranspiration,wind_speed_10m,wind_direction_10m,wind_gusts_10m,shortwave_radiation_instant,diffuse_radiation_instant';
const DAILY_PARAMS = 'temperature_2m_max,temperature_2m_min,temperature_2m_mean,daylight_duration,sunshine_duration,precipitation_hours,shortwave_radiation_sum';
const TEMPERATURE_UNIT = '&temperature_unit=fahrenheit';
const WIND_SPEED_UNIT = '&wind_speed_unit=mph';
const PRECIPITATION_UNIT = '&precipitation_unit=inch';
const TIMEZONE = '&timezone=auto';

const LOCATIONS = [
  { name: "Pearl Harbor", lat: 21.3448, lon: -157.9774 },
  { name: "Kaneohe", lat: 21.4505, lon: -157.768 },
  { name: "Makapu’u", lat: 21.3108, lon: -157.6492 }
];

export const fetchWeatherData = async (location: string, startDate: string, endDate: string) => {
  try {
    const selectedLocation = LOCATIONS.find((loc) => loc.name === location);
    if (!selectedLocation) {
      throw new Error("Location not found");
    }

    const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}&start_date=${startDate}&end_date=${endDate}&hourly=${HOURLY_PARAMS}&daily=${DAILY_PARAMS}${TEMPERATURE_UNIT}${WIND_SPEED_UNIT}${PRECIPITATION_UNIT}${TIMEZONE}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};