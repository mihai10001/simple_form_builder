import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

function DateTimeFormComponent(props) {
  const [value, setValue] = React.useState(null);

  const handleChange = (date) => {
    setValue(date);
  };

  return (
    <KeyboardDatePicker
      fullWidth
      value={value}
      onChange={handleChange}
      variant="inline"
      inputVariant="outlined"
      label={props?.label}
      format="DD-MM-YYYY"
    />);
}

export default DateTimeFormComponent;
