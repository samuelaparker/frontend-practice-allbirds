import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Nav from "../components/nav"
import GlobalStyle from "../assets/GlobalStyles"
import GlobalFonts from "../assets/fonts/fonts";
import Grid from "../components/grid/Grid"




const IndexPage = () =>{
  
    return (
      <React.Fragment>
      <GlobalStyle />
      <GlobalFonts />
      <Nav />
      <Grid/>
     </React.Fragment>
    )
  
}

export default IndexPage

