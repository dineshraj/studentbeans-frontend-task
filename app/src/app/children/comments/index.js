import React from 'react'
import styles from './styles'
import UnlikedIcon from '../like_button/children/unliked_icon'

const Comments = ({ comments }) => {
  return (
    <div style={styles.comments}>
      {
        comments.map(({ node }, i) => {
          return (
            <div style={styles.comment} key={i}>
              <span style={styles.text}>
                <span style={styles.name}>{node.owner.username}</span>
                {node.text}
              </span>
              <span style={styles.heart}>
                <UnlikedIcon />
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments
