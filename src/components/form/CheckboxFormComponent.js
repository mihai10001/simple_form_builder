import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function CheckboxFormComponent(props) {
  const [value, setValue] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControlLabel
      style={{ display: 'flex', height: '100%', alignItems: 'center' }}
      control={ <Checkbox value={value} onChange={handleChange} color="primary" required={props?.required} /> }
      label={props?.label}
    />);
}

export default CheckboxFormComponent;
