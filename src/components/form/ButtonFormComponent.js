import React from 'react';
import { Button } from '@material-ui/core';

const ButtonFormComponent = (props) =>
  <Button variant="outlined" fullWidth style={{ height: '100%' }}>
    {props?.label}
  </Button>;

export default ButtonFormComponent;
