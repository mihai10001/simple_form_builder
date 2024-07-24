import React from 'react';
import { TextField } from '@material-ui/core';

function TextFieldFormComponent(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      fullWidth
      value={value}
      onChange={handleChange}
      variant="outlined"
      label={props?.label}
    />);
}

export default TextFieldFormComponent;
