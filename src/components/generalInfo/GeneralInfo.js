import React, { Fragment, useState, useEffect } from "react"
import styled from 'styled-components';
import { useId } from "react-id-generator";



const GeneralInfo = ({ generalInfo }) => {

    let [toggle, setToggle] = useState(false);

    const toggleGeneralInfo = () => {
        for (let n of generalInfo) {
            if (!toggle) {
              setToggle(true) 
            } else {
                setToggle(false) 
            }
          }
    }

    useEffect(() => {
        toggleGeneralInfo()

    }, [])



    const [htmlId] = useId();

     console.log(generalInfo.map(n => n.heading));

     return (
          <div>
              {generalInfo.map(item => (
                  <Fragment key={htmlId}>
                  <ProductInfoItem key={htmlId}>
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
    /* flex-direction: row-reverse; */
`


const LgColumn = styled.div`
    width: 58.33333%;
    padding: 0 23px;
`
const SmColumn = styled.div`
    width: 41.66667%;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const StyledImage = styled.img`
   width: 100%;
   height: auto;
`

