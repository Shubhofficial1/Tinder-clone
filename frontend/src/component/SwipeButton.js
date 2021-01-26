import React from 'react'
import { IconButton } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

const SwipeButton = () => {
  const swipeClick = () => {
    console.log('swipe Button pressed')
  }
  return (
    <div className='swipeButton'>
      <IconButton onClick={swipeClick}>
        <ReplayIcon fontSize='large' className='swipeButton__1'></ReplayIcon>
      </IconButton>
      <IconButton onClick={swipeClick}>
        <CloseIcon fontSize='large' className='swipeButton__2'></CloseIcon>
      </IconButton>
      <IconButton onClick={swipeClick}>
        <StarRateIcon
          fontSize='large'
          className='swipeButton__3'
        ></StarRateIcon>
      </IconButton>
      <IconButton onClick={swipeClick}>
        <FavoriteIcon
          fontSize='large'
          className='swipeButton__4'
        ></FavoriteIcon>
      </IconButton>
      <IconButton onClick={swipeClick}>
        <FlashOnIcon fontSize='large' className='swipeButton__5'></FlashOnIcon>
      </IconButton>
    </div>
  )
}

export default SwipeButton
