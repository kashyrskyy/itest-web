import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface HourlyDataTableProps {
  data: any;  // You can type this more strictly if you define the structure
}

const HourlyDataTable: React.FC<HourlyDataTableProps> = ({ data }) => {
  if (!data || !data.time) return null;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Temperature (°C)</TableCell>
            <TableCell>Relative Humidity (%)</TableCell>
            <TableCell>Precipitation (mm)</TableCell>
            <TableCell>Cloud Cover (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.time.map((time: string, index: number) => (
            <TableRow key={index}>
              <TableCell>{time}</TableCell>
              <TableCell>{data.temperature_2m[index]}</TableCell>
              <TableCell>{data.relative_humidity_2m[index]}</TableCell>
              <TableCell>{data.precipitation[index]}</TableCell>
              <TableCell>{data.cloud_cover[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HourlyDataTable;