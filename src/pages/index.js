import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Nav from "../components/nav"
import GlobalStyle from "../assets/GlobalStyles"
import GlobalFonts from "../assets/fonts/fonts";
import Grid from "../components/grid/Grid"
import img1 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle.webp'
import img2 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageBack.webp'
import img3 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft.webp'
import img4 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imagePair.webp'
import img5 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageSole.webp'
import img6 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageTop.webp'

let productItems = [
  {
    id: 1,
    title: 'Men\'s Tree Runners',
    price: 98,
    img: [{imageId: 1, src: img1, title: 'image1'}, {imageId: 2, src: img2, title: 'image2'}, {imageId: 3, src: img3, title: 'image3'}, {imageId: 4, src: img4, title: 'image4'}, {imageId: 5, src: img5, title: 'image5'}, {imageId: 6, src: img6, title: 'image6'}],
  },
]



const IndexPage = () =>{

    return (
      <React.Fragment>
      <GlobalStyle />
      <GlobalFonts />
      <Nav />
      <Container>
      <Grid productItems={productItems}/>
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