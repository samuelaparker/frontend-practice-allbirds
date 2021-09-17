import React from 'react';
import { Link } from 'gatsby'
import { useState } from 'react';
import Logo from '../../assets/svg/allbirdsLogo.inline.svg'
import User from '../../assets/svg/user.inline.svg'
import Help from '../../assets/svg/help.inline.svg'
import Cart from '../../assets/svg/cart.inline.svg'
import styled from 'styled-components'



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <NavDesktopWrapper isOpen={isOpen}>
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} >
            <Hamburger isOpen={isOpen}>
                <top />
                <middle />
                <bottom />
            </Hamburger>
        </HamburgerWrapper>
            <NavDesktopListLeft isOpen={isOpen}>
                <StyledLink to="" isOpen={isOpen}>MEN</StyledLink>
                <StyledLink to="" isOpen={isOpen}>WOMAN</StyledLink>
                <StyledLink to="" isOpen={isOpen}>NEW ARRIVALS</StyledLink>
            </NavDesktopListLeft>
            <StyledLogo isOpen={isOpen}/>
            <NavDesktopListRight isOpen={isOpen}>
                <StyledLink to="" isOpen={isOpen}>SUSTAINABILITY</StyledLink>
                <StyledLink to="" isOpen={isOpen}>STORES</StyledLink>
                <StyledUser href="" isOpen={isOpen}><User /></StyledUser>
                <StyledHelp href="" isOpen={isOpen}><Help /></StyledHelp>
                <StyledCart href="" isOpen={isOpen}><Cart /></StyledCart>
            </NavDesktopListRight>
        </NavDesktopWrapper>

    )
}

export default Nav;

const HamburgerWrapper = styled.div`
    display: none;
    align-items: center;
    padding: 0;
    width: 3em;
    height: 3em;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
        margin-top: ${({ isOpen }) => (isOpen ? "1em" : "")};
    }
`

const Hamburger = styled.div`
    position: ${({ isOpen }) => (isOpen ? "block" : "flex")};
    display: flex;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  z-index: 10;
  
  @media (max-width: 768px) {
    
  top, middle, bottom {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
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

    padding: 0 0 0 2rem;
    min-height: 5em;
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 24px 0px;
    
    @media (max-width: 768px) {
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    width: 100%;
    flex-direction: ${({ isOpen }) => (isOpen ? "column" : "none")};
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
    margin: auto;
    @media (max-width: 768px) {
        position: ${({ isOpen }) => (isOpen ? "absolute" : "")};
        align-self: ${({ isOpen }) => (isOpen ? "center" : "")};
        height: ${({ isOpen }) => (isOpen ? "5em" : "")};
        right: ${({ isOpen }) => (isOpen ? "0em" : "0")};
        
   
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

@media (max-width: 768px) {
    background-color: ${({ isOpen }) => (isOpen ? "white" : "none")};
    padding: 2rem;
    border-bottom: grey solid 1px;
    }
`

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



