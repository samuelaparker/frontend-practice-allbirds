import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../assets/GlobalStyles"
import Nav from "../components/Nav"


const IndexPage = () =>{
  
    return (
      <React.Fragment>
      <GlobalStyle />
     <Nav />
     </React.Fragment>
    )
  
}

export default IndexPage

