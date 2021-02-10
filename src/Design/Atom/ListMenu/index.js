import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

function PrimaryMenu({ icon, text, link }) {
  return (
    <>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <ListItem button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </>
  )
}

export default PrimaryMenu
