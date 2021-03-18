import React from 'react';
import { TextField, Box } from '@material-ui/core';

interface Props {
  onChange: (value: string) => void;
}
export default function Search({ onChange }: Props) {
  return (
    <Box width={0.5} m={1}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for..."
        size="small"
        onChange={(e) => onChange(e.target.value)}
      ></TextField>
    </Box>
  );
}
