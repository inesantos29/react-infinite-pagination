import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Image = ({ url }) => {
  return (
    <LazyLoadImage className="item__img" effect="blur" src={url} alt="avatar" />
  )
}

export default Image

Image.propTypes = {
  url: PropTypes.string.isRequired,
}
