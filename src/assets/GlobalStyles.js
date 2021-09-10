import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'goodtimes';
    src: url('../fonts/PlayfairDisplay-Italic.ttf') format('truetype'),
}

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }
  body {
    margin: 0;
    height: 100vh;
    font-family: 'goodtimes';
    
    
  }
  html {
    margin: 0;  
  }

  div {
    font-weight: 400;
    font-family: 'goodtimes';
  }
`

export default GlobalStyle