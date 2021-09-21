import React, { Fragment, } from "react"
import styled from 'styled-components';
import { useId } from "react-id-generator";



const GeneralInfo = ({ generalInfo }) => {

    

    const [htmlId] = useId();

     console.log(generalInfo.map(n => n.heading));

     return (
          <div>
              {generalInfo.map(item => (
                  <Fragment key={htmlId}>
                  <ProductInfoItem key={htmlId} directionToggle={item.toggle}>
               <LgColumn>
                   <div>
                       <StyledImage src={item.image} alt={item.heading}></StyledImage>
                   </div>
               </LgColumn>
               <SmColumn>
                   <TextWrapper>
                       <h3>{item.heading}</h3>
                       <h1>{item.subHeading}</h1>
                       <p>{item.description}</p>
                       <a src={item.linkSrc}>{generalInfo.linkTitle}</a>
                   </TextWrapper>
               </SmColumn>
           </ProductInfoItem>
                  </Fragment>
              
         ))}
         </div>
     )

  
}


export default GeneralInfo;



const ProductInfoItem = styled.div`
    display: flex;
    align-content: center;
    margin-top: 10em;
    /* flex-direction: row-reverse; */
    flex-direction: ${({ directionToggle }) => (directionToggle ? "row-reverse" : "")};
    @media (max-width: 768px) {
        flex-wrap: wrap;
        
    }
`


const LgColumn = styled.div`
    width: 58.33333%;
    padding: 0 23px;
        @media (max-width: 768px) {
        width: 100%;
    }
`
const SmColumn = styled.div`
    width: 41.66667%;
        @media (max-width: 768px) {
            width: 100%;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    @media (max-width: 768px) {
        margin-left: 2em;
        text-align: left;
        
    }
`

const StyledImage = styled.img`
   width: 100%;
   height: auto;
`

