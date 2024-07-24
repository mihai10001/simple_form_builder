import React from 'react';
import ReactDOM from 'react-dom';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
