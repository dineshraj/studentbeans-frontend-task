import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'

const App = ({ data }) => {
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image display_url={data.display_url} edge_media_to_caption={data.edge_media_to_caption} />
      </div>
      <div style={styles.text}>
        <Image className="image" display_url={data.owner.profile_pic_url} edge_media_to_caption={} />
        <p>{data.owner.username}</p>
        <p>{data.location.name}</p>
        
        <p>{data.edge_media_to_caption.edges[0].node.text}</p>
        <p>Comments block</p>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
