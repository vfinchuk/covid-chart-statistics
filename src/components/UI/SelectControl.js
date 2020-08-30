import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

const SelectControl = ({value, label, items, handleChange}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
        <Select
          labelId={`select-label-${label}`}
          id={`select-${label}`}
          value={value}
          onChange={handleChange}
        >
          { items.map(({value, title}) => (
            <MenuItem key={value} value={value}>{title}</MenuItem>
          )) }
        </Select>
      </FormControl>
    </>
  )
}

export default React.memo(SelectControl)
