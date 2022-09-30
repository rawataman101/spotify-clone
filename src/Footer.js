import React from 'react';
import './Footer.css';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumLogo' src="https://e.snmc.io/i/600/w/1ba9fb090e4b2434340286e7083cfb76/4171761/green-day-american-idiot-cover-art.jpg" alt="cover_logo" />
        <div className="footer__songInfo">
          <h4>Holiday!</h4>
          <p>Green Day</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlinedIcon className='footer__green'/>
        <SkipPreviousOutlinedIcon className="footer__icon"/>
        <PlayCircleFilledWhiteOutlinedIcon fontSize="large" className="footer__icon"/>
        <SkipNextOutlinedIcon className="footer__icon"/>
        <RepeatOutlinedIcon className="footer__green"/>
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <QueueMusicOutlinedIcon/>
        </Grid>
        <Grid item>
          <VolumeDownOutlinedIcon/>
        </Grid>
        <Grid item xs>
          <Slider/> 
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer