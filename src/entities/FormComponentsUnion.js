import SelectFormComponent from '../components/form/SelectFormComponent';
import TextFieldFormComponent from '../components/form/TextFieldFormComponent';
import CheckboxFormComponent from '../components/form/CheckboxFormComponent';
import DateTimeFormComponent from '../components/form/DateTimeFormComponent';
import BlankFormComponent from '../components/form/BlankFormComponent';
import ButtonFormComponent from '../components/form/ButtonFormComponent';
import SliderFormComponent from '../components/form/SliderFormComponent';
import ToggleFormComponent from '../components/form/ToggleFormComponent';

export const FormComponentsUnion = [
  { id: 1, name: 'TextField component' },
  { id: 2, name: 'Checkbox component' },
  { id: 3, name: 'DateTime component' },
  { id: 4, name: 'Select component' },
  { id: 5, name: 'Button component' },
  { id: 6, name: 'Slider component' },
  { id: 7, name: 'Toggle component' },
  { id: 8, name: 'Blank component' },
];

export const RenderFormComponent = (id, label, required) => {
  switch(id) {
    case 1:
      return <TextFieldFormComponent label={label} required={required} />;
    case 2:
      return <CheckboxFormComponent label={label} required={required} />;
    case 3:
      return <DateTimeFormComponent label={label} required={required} />;
    case 4:
      return <SelectFormComponent label={label} required={required} />;
    case 5:
      return <ButtonFormComponent label={label} />;
    case 6:
      return <SliderFormComponent label={label} />;
    case 7:
      return <ToggleFormComponent label={label} required={required} />;
    case 8:
      return <BlankFormComponent label={label} />;
    default:
      return null;
  }
};
