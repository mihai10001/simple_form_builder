import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function SelectFormComponent(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{props?.label}</InputLabel>
      <Select value={value} onChange={handleChange} variant="outlined"
        label={props?.label}>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={4}>Four</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
      </Select>
    </FormControl>);
}

export default SelectFormComponent;
