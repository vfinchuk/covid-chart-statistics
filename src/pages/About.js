import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  content: {
    margin: '5rem auto 0',
    maxWidth: 550
  },
  title: {
    margin: '5rem auto 0',
    textAlign: 'center'
  }
}))

const About = () => {
  const styles = useStyles()
  return (
    <Box m={1}>
      <Typography
        className={styles.title}
        variant="h3"
        component="h2"
        gutterBottom
      >
        COVID-19
      </Typography>
      <Typography className={styles.content} variant="body1" gutterBottom>
        The coronavirus COVID-19 pandemic is the defining global
        health crisis of our time and the greatest challenge we
        have faced since World War Two. Since its emergence in
        Asia late last year, the virus has spread to every continent
        except Antarctica.
      </Typography>
    </Box>
  )
}

export default About
