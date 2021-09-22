import React from "react";
import styled from "styled-components";
import { useId } from "react-id-generator";


let generalInfoRowCounter = 0;

const GeneralInfo = ({ generalInfo }) => {
  const [htmlId] = useId();

   /* generalInfoRowCounter++;
          let toggle = generalInfoRowCounter % 2 == true;
          console.log(toggle); */
  

  return (
    <>
      {generalInfo.map((item) => (
          <ProductInfoItem directionToggle={true} key={htmlId}>
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
      ))}
    </>
  );    
};

export default GeneralInfo;

const ProductInfoItem = styled.div`
  display: flex;
  align-content: center;
  margin-top: 10em;
  /* flex-direction: row-reverse; */
  flex-direction: ${({ directionToggle }) =>
    directionToggle ? "row-reverse" : ""};
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const LgColumn = styled.div`
  width: 58.33333%;
  padding: 0 23px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SmColumn = styled.div`
  width: 41.66667%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (max-width: 768px) {
    margin-left: 2em;
    text-align: left;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
