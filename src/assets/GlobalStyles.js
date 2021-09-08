import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }
  body {
    margin: 0;
    height: 100vh;
  }
  html {
    margin: 0;  
  }
`

export default GlobalStyle