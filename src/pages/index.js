import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../assets/GlobalStyles"
import Nav from "../components/Nav"


const IndexPage = () =>{
  
    return (
      <Wrapper>
     <Nav />
     </Wrapper>
    )
  
}

export default IndexPage


const Wrapper = styled.body`
  margin: 0;
  padding: 0;
  background: grey;
`