import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle.webp'
import img2 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageBack.webp'
import img3 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft.webp'
import img4 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imagePair.webp'
import img5 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageSole.webp'
import img6 from '../../assets/img/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageTop.webp'

function Grid({ gridColumns }) {

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
  
    <StyledGrid gridColumns={gridColumns}>
      {
        gridItems.map((item, index) => {
          return <StyledGridItem key={item.id} backGroundImg={item.img}>
  
          </StyledGridItem>
        }
        )}

    </StyledGrid>
    
  )

}

export default Grid;



const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StyledGridItem = styled.div`
position: relative;
  margin: 0;
  padding-top: 100%; /* 1:1 Aspect Ratio !!!!!!!!!!!! */
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-image: url(${props => props.backGroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  


`






// const StyledGrid = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: stretch;
//   flex-wrap: wrap;
//   margin: 0 1em 0 1em;
// `

// const StyledGridItem = styled.div`
//   margin: 0;
//   width: 40%;
//   height: 31em;
//   margin: 0.1em 0.5em 0.1em 0.5em;
//   background-image: url(${props => props.backGroundImg});
//   background-size: contain;
//   background-repeat: no-repeat;
  
//   @media (max-width: 768px) {
//     box-sizing: border-box;
//     margin: 1.313em 0 1.313em 0;
//       width: 100%;
//   }

// `
