import * as React from 'react';
import Plot from 'react-plotly.js';

interface TemperatureChartProps {
  timeData: string[];  // Array of time strings
  temperatureData: number[];  // Array of temperature values
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ timeData, temperatureData }) => {
  return (
    <Plot
      data={[
        {
          x: timeData,  // Time values for x-axis
          y: temperatureData,  // Temperature values for y-axis
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ]}
      layout={{ 
        title: 'Temperature Over Time',
        xaxis: { title: 'Time' },
        yaxis: { title: 'Temperature (°C)' },
      }}
    />
  );
};

export default TemperatureChart;