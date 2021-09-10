import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Nav from "../components/nav"
import GlobalStyle from "../assets/GlobalStyles"





const IndexPage = () =>{
  
    return (
      <React.Fragment>
      <GlobalStyle />
      <Nav />
      <div>test</div>
     </React.Fragment>
    )
  
}

export default IndexPage

