import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface DailyDataTableProps {
  data: any;
}

const DailyDataTable: React.FC<DailyDataTableProps> = ({ data }) => {
  if (!data || !data.time) return null;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Max Temperature (°C)</TableCell>
            <TableCell>Min Temperature (°C)</TableCell>
            <TableCell>Mean Temperature (°C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.time.map((date: string, index: number) => (
            <TableRow key={index}>
              <TableCell>{date}</TableCell>
              <TableCell>{data.temperature_2m_max[index]}</TableCell>
              <TableCell>{data.temperature_2m_min[index]}</TableCell>
              <TableCell>{data.temperature_2m_mean[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DailyDataTable;