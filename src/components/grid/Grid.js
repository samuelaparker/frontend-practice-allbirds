import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle.webp'
import img2 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageBack.webp'
import img3 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft.webp'
import img4 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imagePair.webp'
import img5 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageSole.webp'
import img6 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageTop.webp'

function Grid() {

  let gridItems = [
    {
      id: 1,
      title: 'Item 1',
      img: img1,
    },
    {
      id: 2,
      title: 'Item 2',
      img: img2,
    },
    {
      id: 3,
      title: 'Item 3',
      img: img3,
    },
    {
      id: 4,
      title: 'Item 4',
      img: img4,
    },
    {
      id: 5,
      title: 'Item 5',
      img: img5,
    },
    {
      id: 6,
      title: 'Item 6',
      img: img6,
    },
  ]

  return (
  
    <StyledFlexWrapper>
      <StyledGridSectionLarge>
        <StyledFlexImagesWrapper>
          {gridItems.map(item => (
            <StyledGridItem>
            <StyledImage src={item.img} alt={item.title} key={item.id} />
            </StyledGridItem>
          ))}
        </StyledFlexImagesWrapper>
      </StyledGridSectionLarge>
      <StyledGridSectionSmall>
        <div>
          <h1>
            Product Title
          </h1>
        </div>
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