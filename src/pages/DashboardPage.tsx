// src/pages/DashboardPage.tsx
import { useState } from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import LocationSelect from '../components/LocationSelect';
import DatePicker from '../components/DatePicker';
import HourlyDataTable from '../components/HourlyDataTable';
import DailyDataTable from '../components/DailyDataTable';
import TemperatureChart from '../components/TemperatureChart';  // Import TemperatureChart

const DashboardPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Pearl Harbor');
  const [startDate, setStartDate] = useState<string>('2024-09-13');
  const [endDate, setEndDate] = useState<string>('2024-09-14');

  const { data, loading, error } = useWeatherData(selectedLocation, startDate, endDate);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <LocationSelect selectedLocation={selectedLocation} onSelectLocation={setSelectedLocation} />
      <DatePicker startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && data.hourly && (
        <div>
          {/* Temperature Chart */}
          <h2>Temperature Over Time</h2>
          <TemperatureChart timeData={data.hourly.time} temperatureData={data.hourly.temperature_2m} />

          {/* Hourly Data Table */}
          <h2>Hourly Data</h2>
          <HourlyDataTable data={data.hourly} />
        </div>
      )}

      {data && data.daily && (
        <div>
          {/* Daily Data Table */}
          <h2>Daily Data</h2>
          <DailyDataTable data={data.daily} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;