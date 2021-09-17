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
      <Container>
      <Grid/>
      </Container>
     </React.Fragment>
    )
  
}

export default IndexPage

const Container = styled.div`
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
`