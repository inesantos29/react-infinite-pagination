import React from 'react'
import { GlobalStyle } from './style'
import { Heading } from './components/Heading'
import { ListItems } from './components/ListItems'

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Heading />
        <ListItems />
      </main>
    </>
  )
}

export default App
