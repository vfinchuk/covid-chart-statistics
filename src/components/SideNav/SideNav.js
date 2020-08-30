import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import {ListItem} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 250,
    },
    activeListItem: {
      textDecoration: 'underline'
    }
  }),
)

const SideNav = ({links, trigger, closeDrawerHandler, history}) => {
  const classes = useStyles()

  const clickItemHandler = (url) => {
    closeDrawerHandler()
    if (url !== history.location.pathname) {
      history.push(url)
    }
  }

  return (
    <Drawer anchor='left' open={trigger} onClose={closeDrawerHandler}>
      <List className={classes.list}>
        {links.map((link) => (
          <ListItem
            key={link.name}
            button
            onClick={() => clickItemHandler(link.url)} >
            <ListItemText
              primary={link.name}
              className={link.url === history.location.pathname
                ? classes.activeListItem
                : null}/>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default withRouter(SideNav)
