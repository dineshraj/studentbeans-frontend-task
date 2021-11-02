import React from 'react'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'
import Comments from './children/comments'

import { getCaptionFromEdges } from './children/image/helpers'

const App = ({ data }) => {
  const comments = data.edge_media_to_comment.edges

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image display_url={data.display_url} altText={getCaptionFromEdges(data.edge_media_to_caption)} style={{ width: '100%', display: 'block' }} />
      </div>
      <div style={styles.text}>
        <div style={styles.heading}>
          <Image style={styles.heading.icon} display_url={data.owner.profile_pic_url} altText={data.owner.full_name} />
          <div style={styles.heading.userInfo}>
            <p style={styles.heading.username}>{data.owner.username}</p>
            <p style={styles.heading.location}>{data.location.name}</p>
          </div>
        </div>
        <div style={styles.content}>
          <p>{data.edge_media_to_caption.edges[0].node.text}</p>
          <Comments comments={comments} />
        </div>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
