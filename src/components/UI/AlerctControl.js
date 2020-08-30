import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const AlertControl = () => {
  const classes = useStyles();
  const alert = useSelector(({app}) => app.alert)

  if (!alert) {
    return null
  }

  return (
    <div className={classes.root}>
      <Alert severity="error">{alert}</Alert>
    </div>
  )
}

export default AlertControl
