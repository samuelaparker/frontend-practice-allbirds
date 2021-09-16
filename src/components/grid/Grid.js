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
          return <TestDiv key={item.id}>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
          </TestDiv>
        }
        )}

    </StyledGrid>
  )

}

export default Grid;

const StyledWrapper = styled.div`
  max-width: 1600px;
  margin: 0;
  padding: 0;
`

const StyledGrid = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  width: 100%;

`

const TestDiv = styled.div`
margin: 0;
  /* flex: 1 0 25%; 
  margin: 5px;
  height: 100px;
  background-color: blue; */
  width: 32%;
  height: 400px;
  box-sizing: border-box;
  background-color: transparent; 
  margin: 5px;
  @media (max-width: 768px) {
    box-sizing: border-box;
      margin: 0px;
      padding: 0;
      width: 100%;
  }

`
