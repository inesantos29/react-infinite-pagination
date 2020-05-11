import React from 'react'
import { Loading } from './style'

const Loader = () => {
  return (
    <Loading>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  )
}

export default Loader
