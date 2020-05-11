import React from 'react'

import { Header } from './style'

const Heading = () => {
  return (
    <Header>
      <h1>List of items</h1>
      <p>
        Whenever you click in one of the items, the item becomes greyed out and
        persist even after refreshing the page.
      </p>
    </Header>
  )
}

export default Heading
