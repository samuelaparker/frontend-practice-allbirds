import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../ProductInfo';


function Grid({ productItems}) {
 
  return (
  
    <StyledFlexWrapper>
      <StyledGridSectionLarge>
        <StyledFlexImagesWrapper>
          {productItems[0].img.map((item) => (
            <StyledGridItem key={item.imageId}>
            <StyledImage src={item.src} alt={item.title}  />
            </StyledGridItem>
          ))}
        </StyledFlexImagesWrapper>
      </StyledGridSectionLarge>
      <StyledGridSectionSmall>
        <ProductInfo productItems={productItems}/>
      </StyledGridSectionSmall>
    </StyledFlexWrapper>
  )

}

export default Grid;



const StyledFlexWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    margin: 0px auto;

  @media (max-width: 768px) {
    
  }
`
const StyledGridSectionLarge = styled.div`
  /* position: relative; */
  width: 66.6667%;
  @media (max-width: 768px) {
    width: 100%;
  }

`
const StyledGridSectionSmall = styled.div`
  /* position: relative; */
  width: 33.3333%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledFlexImagesWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  flex-flow: row wrap;
  width: 100%;
 
  
`

const StyledGridItem = styled.div`
  width: 50%;
  padding: 10px;
  display: block;
  margin: 0px auto;
  @media (max-width: 768px) {
    
    width: 100%;
  }

`


const StyledImage = styled.img`
  max-width: 100%;
  min-width: 100%;
`

// background-image: url(${props => props.backGroundImg});