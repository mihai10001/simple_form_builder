import React from 'react';
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { FormComponentsUnion } from '../entities/FormComponentsUnion';
import { ColorsUnion } from '../entities/ColorsUnion';

function AddNewComponentSection(props) {
  const [newComponentIndex, setNewComponentIndex] = React.useState(1);
  const [newComponentLabel, setNewComponentLabel] = React.useState('Default label');
  const [newComponentColor, setNewComponentColor] = React.useState(1);
  const [isRequired, setIsRequired] = React.useState(false);

  return (
    <div className="configSection">
      <Grid container spacing={1}>
        <Grid item md={3}>
          <FormControl variant="outlined">
            <InputLabel>Component type</InputLabel>
            <Select value={newComponentIndex}
              onChange={(event) => setNewComponentIndex(event.target.value)}
              label="Component type">
              {FormComponentsUnion.map(comp => <MenuItem value={comp?.id}>{comp?.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={2}>
          <TextField
            value={newComponentLabel}
            onChange={(event) => setNewComponentLabel(event.target.value)}
            variant="outlined"
            label="Label value"
          />
        </Grid>

        <Grid item md={2}>
          <FormControl variant="outlined">
            <InputLabel>Color</InputLabel>
            <Select value={newComponentColor}
              onChange={(event) => setNewComponentColor(event.target.value)}
              label="Color">
              {ColorsUnion.map(comp => <MenuItem value={comp?.id}>{comp?.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={2} style={{ alignContent: 'center' }}>
          <FormControlLabel
            label="Required"
            control={ <Checkbox value={isRequired} onChange={(event) => setIsRequired(event.target.value)} color="primary"/> }
          />
        </Grid>

        <Grid item md={3} style={{ alignContent: 'center' }}>
          <Button variant="contained" color="primary" size="medium" startIcon={<AddCircleIcon />}
            onClick={() => {
              const color = ColorsUnion.find(color => color.id === newComponentColor)?.htmlName;
              props?.onAddNewFormComponent(newComponentIndex, newComponentLabel, color, isRequired);
            }}>
            Add
          </Button>
          <Button variant="contained" color="default" size="medium" startIcon={<ImportExportIcon />}
            onClick={() => props?.onExportFormStructure()}>
            Export
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddNewComponentSection;
