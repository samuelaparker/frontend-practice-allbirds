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
    font-size: 16px;
    
    
  }
  html {
    margin: 0;  
  }

  div {
    font-weight: 400;
    font-family: 'Hurme Geometric Sans';
  }

  h1 {
    font-family: 'Hurme Geometric Sans Bold';
    font-size: 32px
  }
  h2 {
    font-family: 'Hurme Geometric Sans';
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-family: 'Hurme Geometric Sans';
    font-size: 12px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    
  }
`

export default GlobalStyle