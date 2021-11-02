import React from 'react'
import styles from './styles'
import Image from '../image';


const Heading = ({ owner, location }) => {
  
  const logo = <Image style={styles.icon} display_url={owner.profile_pic_url} altText={owner.full_name} />

  return (
    <div style={styles.container} className='heading' aria-label="user">
      {logo}
      <div style={styles.userInfo}>
        <p style={styles.username} className='username'>{owner.username}</p>
        <p style={styles.location} className='location'>{location}</p>
      </div>
    </div>
  )
}

export default Heading;
