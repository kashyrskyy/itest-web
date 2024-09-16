import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface LocationSelectProps {
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
}

const LocationSelect: React.FC<LocationSelectProps> = ({ selectedLocation, onSelectLocation }) => {
  const locations = ["Pearl Harbor", "Kaneohe", "Makapu’u"];

  return (
    <FormControl fullWidth>
      <InputLabel id="location-select-label">Location</InputLabel>
      <Select
        labelId="location-select-label"
        id="location-select"
        value={selectedLocation}
        label="Location"
        onChange={(e) => onSelectLocation(e.target.value)}
      >
        <MenuItem value="">
          <em>Select a location</em>
        </MenuItem>
        {locations.map((location) => (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocationSelect;