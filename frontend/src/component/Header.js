import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import MessageIcon from '@material-ui/icons/Message'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import { IconButton } from '@material-ui/core'

const Header = () => {
  const person = () => {
    console.log('Person logo clicked')
  }

  const icon = () => {
    console.log('Icon logo clicked')
  }

  const message = () => {
    console.log('Message logo clicked')
  }

  return (
    <div className='header'>
      <IconButton color='primary' onClick={person}>
        <PersonIcon fontSize='large' className='header__person' />
      </IconButton>

      <IconButton color='secondary' onClick={icon}>
        <WhatshotIcon fontSize='large' className='header__icon' />
      </IconButton>

      <IconButton color='inherit' onClick={message}>
        <MessageIcon fontSize='large' className='header__message' />
      </IconButton>
    </div>
  )
}

export default Header
