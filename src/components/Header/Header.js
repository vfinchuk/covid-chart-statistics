import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import SideNav from '../SideNav/SideNav'
import {toggleNavigation} from '../../redux/app/appActions'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
    list: {
      width: 250,
    }
  }),
)

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navLinks = useSelector(({app}) => app.navLinks)
  const navTrigger = useSelector(({app}) => app.navTrigger)

  const onToggleDrawer = () => {
    dispatch(toggleNavigation())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onToggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Covid-19
          </Typography>

          <SideNav
            trigger={navTrigger}
            links={navLinks}
            closeDrawerHandler={onToggleDrawer}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
