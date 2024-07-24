import React from 'react';
import { Typography, Slider } from '@material-ui/core';

function SliderFormComponent(props) {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    event.stopPropagation();
    setValue(newValue);
  };

  return (<>
      <Typography gutterBottom>{props?.label}</Typography>
      <Slider value={value} min={0} max={100} onChange={handleChange} valueLabelDisplay="auto" />
    </>
  );
}

export default SliderFormComponent;
