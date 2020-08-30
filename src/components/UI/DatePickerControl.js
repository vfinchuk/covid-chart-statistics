import React from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'

const DatePickerControl = ({value, label, minDate, maxDate, changeHandle}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd.MM.yyyy"
        margin="normal"
        label={label}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={changeHandle}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePickerControl
