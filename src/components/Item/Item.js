import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Image } from './Image'
import './style.css'

const Item = ({ id, index, background, onClick, name }) => {
  const imageUrl = ` https://source.unsplash.com/collection/${index}/400x400`
  const itemCardClass = classNames('item', background !== '' ? 'greyBg' : '')
  return (
    <div id={id} className={itemCardClass} onClick={onClick}>
      <Image url={imageUrl} />
      <div className="item__profile">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Item

Item.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}
