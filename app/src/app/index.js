import React from 'react'
import Image from './children/image'
import styles from './styles'
import Comments from './children/comments'
import Heading from './children/heading'
import Footer from './children/footer'

import { getCaptionFromEdges } from './children/image/helpers'

const App = ({ data }) => {
  const comments = data.edge_media_to_comment.edges;
  const likes = data.edge_media_preview_like.count
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image display_url={data.display_url} altText={getCaptionFromEdges(data.edge_media_to_caption)} style={{ width: '100%', display: 'block' }} />
      </div>
      <div style={styles.text}>
        <Heading owner={data.owner} location={data.location.name} />
        <div style={styles.content}>
          <p style={styles.post}>{getCaptionFromEdges(data.edge_media_to_caption)}</p>
          <Comments comments={comments} />
        </div>
        <Footer likes={likes} time={data.taken_at_timestamp} />
      </div>
    </main>
  )
}

export default App
