import React from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';

function LayoutConfigurationSection(props) {
  return (
    <div className="configSection">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>Items per row</Typography>
          <Slider
            value={props?.itemsPerRow}
            min={1}
            max={7}
            onChange={(event, newValue) => props?.setItemsPerRow(newValue)}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography>Row height</Typography>
          <Slider
            value={props?.rowHeight}
            min={60}
            max={200}
            onChange={(event, newValue) => props?.setRowHeight(newValue)}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutConfigurationSection;
