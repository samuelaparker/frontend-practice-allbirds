import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Nav from "../components/nav"
import GlobalStyle from "../assets/GlobalStyles"
import GlobalFonts from "../assets/fonts/fonts";
import Grid from "../components/grid/Grid"
import GeneralInfo from "../components/generalInfo"
import img1 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle.webp'
import img2 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageBack.webp'
import img3 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft.webp'
import img4 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imagePair.webp'
import img5 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageSole.webp'
import img6 from '../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageTop.webp'
import generalInfoImage1 from '../assets/img/TR-Desktop__PDP_BTF-1.jpeg'
import generalInfoImage2 from '../assets/img/TR-Desktop__PDP_BTF-2.webp'
import generalInfoImage3 from '../assets/img/insoles-right.webp'
import generalInfoImage4 from '../assets/img/TR-Desktop__PDP_BTF-4.jpeg'
import generalInfoImage5 from '../assets/img/Q321-Carbon-TR-Desktop.webp'


let productItems = [
  {
    
    title: 'Men\'s Tree Runners',
    price: 98,
    img: [{imageId: 1, src: img1, title: 'image1'}, {imageId: 2, src: img2, title: 'image2'}, {imageId: 3, src: img3, title: 'image3'}, {imageId: 4, src: img4, title: 'image4'}, {imageId: 5, src: img5, title: 'image5'}, {imageId: 6, src: img6, title: 'image6'}],
    reviewNumber: 1988,
    reviewSummary: [
      {
        reviewRating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        reviewer: 'John Doe',
      }
    ]
  },
]

let generalInfo = [
  {
    heading: 'TREE UPPER',
    subHeading: 'Silky And Breezy',
    description: 'Our proprietary knit feels silky smooth, breathable, and pleasantly cool thanks to eucalyptus tree fiber responsibly sourced from FSC® Certified forests.',
    image: generalInfoImage1,
    linkTitle: '',
    linkSrc: '',
    toggle: false,
  },
  {
    heading: 'SUGARCANE MIDSOLE',
    subHeading: 'Sweet On The Planet',
    description: 'We layered castor bean oil, which emits less carbon than petroleum-based foam, and ZQ Merino wool for a cushiony, moisture wicking, and odor reducing insole.',
    image: generalInfoImage2,
    linkTitle: '',
    linkSrc: '',
    toggle: true,
  },
  {
    heading: 'CASTOR BEAN INSOLE',
    subHeading: 'Plant Your Feet In Comfort',
    description: 'We layered castor bean oil, which emits less carbon than petroleum-based foam, and ZQ Merino wool for a cushiony, moisture wicking, and odor reducing insole.',
    image: generalInfoImage3,
    linkTitle: '',
    linkSrc: '',
    toggle: false,
  },
  {
    heading: 'RECYCLED LACES',
    subHeading: 'Loop And Swoop',
    description: 'Our laces are made from 100% post-consumer recycled polyester. One old plastic bottle becomes one pair of shoelaces.',
    image: generalInfoImage4,
    linkTitle: '',
    linkSrc: '',
    toggle: true,
  },
  {
    heading: 'Tread Lighter',
    subHeading: '',
    description: 'Our Tree Runner is carbon neutral thanks to sustainable practices, like using natural materials and buying offsets. But before we balance the emissions, its footprint starts at 9.6 kg CO2e. Think of this measurement like a nutrition label for your closet.',
    image: generalInfoImage5,
    linkTitle: 'Dig Into How We’re Measuring CO2e',  
    linkSrc: 'https://www.allbirds.com/pages/footprint',
    toggle: false,
  },
]


const IndexPage = () =>{
  console.log(typeof(React.Fragment));
  
    return (
      
      <React.Fragment>
      <GlobalStyle />
      <GlobalFonts />
      <Nav />
      <Container>
      <Grid productItems={productItems}/>
      <GeneralInfo generalInfo={generalInfo}/>
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