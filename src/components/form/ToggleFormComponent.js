import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

function ToggleFormComponent(props) {
  const [value, setValue] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControlLabel
      style={{ display: 'flex', height: '100%', alignItems: 'center' }}
      control={ <Switch value={value} onChange={handleChange} color="primary" /> }
      label={props?.label}
    />);
}

export default ToggleFormComponent;
