import React from 'react'

const Image = ({ display_url: displayUrl, altText, style = {} }) => {
  return (
    <img
      src={displayUrl}
      alt={altText}
      style={style}
    />
  )
}

export default Image
