import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PrimaryMenu from '../../Atom/ListMenu'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'

const menulist = [
  {
    icons: <ShoppingCartIcon />,
    text: 'Product List',
    link: '/',
    id: 1
  },
  {
    icons: <FolderOpenIcon />,
    text: 'Orders',
    link: '/orders',
    id: 2
  }
]

export const mainListItems = (
  <div>
    {menulist.map(value => {
      return (
        <PrimaryMenu
          key={value.id}
          icon={value.icons}
          text={value.text}
          link={value.link}
        />
      )
    })}
  </div>
)
