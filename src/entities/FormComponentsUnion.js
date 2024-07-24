import SelectFormComponent from '../components/form/SelectFormComponent';
import TextFieldFormComponent from '../components/form/TextFieldFormComponent';
import CheckboxFormComponent from '../components/form/CheckboxFormComponent';
import DateTimeFormComponent from '../components/form/DateTimeFormComponent';
import BlankFormComponent from '../components/form/BlankFormComponent';
import ButtonFormComponent from '../components/form/ButtonFormComponent';
import SliderFormComponent from '../components/form/SliderFormComponent';
import ToggleFormComponent from '../components/form/ToggleFormComponent';

export const FormComponentsUnion = [
  { id: 1, name: 'Blank component' },
  { id: 2, name: 'TextField component' },
  { id: 3, name: 'Checkbox component' },
  { id: 4, name: 'DateTime component' },
  { id: 5, name: 'Select component' },
  { id: 6, name: 'Button component' },
  { id: 7, name: 'Slider component' },
  { id: 8, name: 'Toggle component' }
];

export const RenderFormComponent = (id, label, required) => {
  switch(id) {
    case 1:
      return <BlankFormComponent label={label} required={required} />;
    case 2:
      return <TextFieldFormComponent label={label} required={required} />;
    case 3:
      return <CheckboxFormComponent label={label} required={required} />;
    case 4:
      return <DateTimeFormComponent label={label} required={required} />;
    case 5:
      return <SelectFormComponent label={label} required={required} />;
    case 6:
      return <ButtonFormComponent label={label} required={required} />;
    case 7:
      return <SliderFormComponent label={label} required={required} />;
    case 8:
      return <ToggleFormComponent label={label} required={required} />;
    default:
      return null;
  }
};
