import React from 'react';
import styled from 'styled-components';

const SizeSelector = () => {


    return (
        <Container>
            <StyledText>SELECT SIZE:</StyledText>
            <SizeWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>1</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>2</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>3</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>4</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>5</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>6</ButtonContent></StyledButton></ButtonWrapper>
                <ButtonWrapper><StyledButton><ButtonContent>7</ButtonContent></StyledButton></ButtonWrapper>
                
            </SizeWrapper>
        </Container>
    )
 };


export default SizeSelector;

const StyledText = styled.p`
    font-family: 'Hurme Geometric Sans Bold';
    margin: 5px 0;
`

const Container = styled.div`
   
    margin: 0 auto;
    width: 100%;
`
const SizeWrapper = styled.div`
    display: flex;
    width: 75%
    
`
const ButtonWrapper = styled.div`
    
    margin: 2px;
    width: 100%;
    
    
`

const StyledButton = styled.button`
    width: 100%;
    position: relative;
    background-color: white;
    border: 1px solid rgb(33, 42, 47);
    border-radius: 2px;
    cursor: pointer;
    padding-top: 100%;
    
    &:hover {
        background-color: grey;
        transition: background 125ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`

const ButtonContent = styled.p`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

`