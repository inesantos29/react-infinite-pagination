import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    color: #3c3c3c;
  }

  main {
    max-width: 1366px;
    margin: 0 auto;
    padding: 40px;
  }  

  h1, p {
    margin-bottom: 20px;
  }
`
