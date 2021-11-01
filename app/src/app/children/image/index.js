import React from 'react'
import styles from './styles'
import {getCaptionFromEdges} from './helpers'

const Image = ({ display_url, edge_media_to_caption }) => {
  return (
    <img
      src={display_url}
      style={styles}
      alt={getCaptionFromEdges(edge_media_to_caption)}
    />
  )
}

export default Image
