import React from 'react';
import styled from 'styled-components';


function Grid({ gridColumns }) {

  let gridItems = [
    {
      id: 1,
      title: 'Item 1',
    },
    {
      id: 2,
      title: 'Item 2',
    },
    {
      id: 3,
      title: 'Item 3',
    },
    {
      id: 4,
      title: 'Item 4',
    },
    {
      id: 5,
      title: 'Item 5',
    },
    {
      id: 6,
      title: 'Item 6',
    },
  ]

  return (
    <StyledGrid gridColumns={gridColumns}>
      {
        gridItems.map((item, index) => {
          return <TestDiv key={index}>
            <div>{item.title}</div>
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
  background-color: blue; 
  margin: 5px;
  @media (max-width: 768px) {
    box-sizing: border-box;
      margin: 0px;
      padding: 0;
      width: 100%;
  }

`