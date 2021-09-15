import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Hurme Geometric Sans';
    
    
  }
  html {
    margin: 0;  
  }

  div {
    font-weight: 400;
    font-family: 'Hurme Geometric Sans';
  }
`

export default GlobalStyle