import React from 'react';
import { Link } from 'gatsby'
import { useState } from 'react';
import Logo from '../../assets/allbirdsLogo.inline.svg'
import User from '../../assets/user.inline.svg'
import Help from '../../assets/help.inline.svg'
import Cart from '../../assets/cart.inline.svg'
import styled from 'styled-components'



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <NavDesktopWrapper isOpen={isOpen}>
            <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <top />
                <middle />
                <bottom />
            </Hamburger>

            <NavDesktopListLeft isOpen={isOpen}>
                <StyledLink to="" >MEN</StyledLink>
                <StyledLink to="">WOMAN</StyledLink>
                <StyledLink to="">NEW ARRIVALS</StyledLink>
            </NavDesktopListLeft>
            <StyledLogo />
            <NavDesktopListRight isOpen={isOpen}>
                <StyledLink to="">SUSTAINABILITY</StyledLink>
                <StyledLink to="">STORES</StyledLink>
                <StyledUser href=""><User /></StyledUser>
                <StyledHelp href=""><Help /></StyledHelp>
                <StyledCart href=""><Cart /></StyledCart>
            </NavDesktopListRight>
        </NavDesktopWrapper>

    )
}

export default Nav;

const Hamburger = styled.div`

    
position: ${({ isOpen }) => (isOpen ? "block" : "absolute")};
  
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    
    /* display: flex; */

  
  top, middle, bottom {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 4px;
    
  }
  }

  middle {
    display: ${({ isOpen }) => (isOpen ? "none" : "")};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
  }

  top {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  
  }

  bottom {
   
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  
`;

const NavDesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0.5rem 1rem;
    min-height: 5em;
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 24px 0px;
    

    @media (max-width: 768px) {
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    width: 100%;
    flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
    /* height: ${({ isOpen }) => (isOpen ? "100vh" : "")}; */
    align-items: ${({ isOpen }) => (isOpen ? "right" : "center")};
    
  }
`
const NavDesktopListLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        align-items: ${({ isOpen }) => (isOpen ? "stretch" : "center")};
        
  }
`
const NavDesktopListRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        align-items: ${({ isOpen }) => (isOpen ? "stretch" : "center")};
              

}
`

const StyledLogo = styled(Logo)`
    width: 9em;
    @media (max-width: 768px) {
        
        margin: auto;

      
  }
`
const StyledLink = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    text-decoration: none;
    color: black;
    font-family: 'Hurme Geometric Sans Bold';
    font-size: 12px;
    
    
    &:hover {
    text-decoration: underline;
}
`;


const StyledUser = styled.a`
    width: 1.2em;
    height: 1.2em;
    margin: 1em;
    &:hover {
    fill: rgb(92, 92, 92);
    }
`
const StyledHelp = styled.a`
    width: 1.5em;
    height: 1.5em;
    margin: 1em;
    &:hover {
    fill: rgb(92, 92, 92);
    }
`
const StyledCart = styled.a`
    width: 1.5em;
    height: 1.5em;
    stroke: black;
    margin: 1em;
   
    &:hover {
    stroke: rgb(92, 92, 92);  
    }
`



