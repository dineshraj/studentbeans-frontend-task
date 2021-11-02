      
import React from 'react'
import styles from './styles'
import UnlikedIcon from '../like_button/children/unliked_icon'
import { timeDifference } from './helpers';

const Footer = ({ likes, time }) => {
  const timeAgo = timeDifference(Math.floor(Date.now() / 1000), time)
  return (
    <div style={styles.footer} className='footer'>
      <div style={styles.metadata}>
        <p style={styles.likes} className='likes'>{likes} likes</p>
        <p style={styles.time} className='time'>{timeAgo}</p>
      </div>
      <UnlikedIcon style={styles.icon} />
    </div>
  );
}

export default Footer;
