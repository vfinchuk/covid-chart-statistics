import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'zIndex': -1,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root} m={1} height={100}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
