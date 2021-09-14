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
            
            {/* <Icon onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <IconMiddle />
            <IconBottom /> */}
            <Hamburger isOpen={isOpen}>
                <span />
                <span />
                <span />
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
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    height: 3px;
    width: 30px;
    background: black;
    margin-bottom: 4px;
    margin-top: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

// const Icon = styled.span`
//     display: none;
// @media (max-width: 768px) {
//         display: flex;
//   }
//   position: relative;
//   background-color: ${(isOpen) => (isOpen ? "transparent" : "black")};
//   width: 3em;
//   height: 5px;
//   margin-top: 3.5em;
//   &::before,
//   &::after {
//     content: "";
//     background-color: black;
//     width: 2em;
//     height: 2px;
//     position: absolute;
//     left: 0;
//   }
//   &::before {
//     top: -0.3em;
//   }
//   &::after {
//     top: 0.3em;
//   }
//   &::before {
//     top: ${(props) => (props.isOpen ? "0" : "-0.3rem")};
//     transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "rotate(0)")};
//   }
//   &::after {
//     top: ${(props) => (props.isOpen ? "0" : "0.3rem")};
//     transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(0)")};
//   }
  
// `;

// const Menu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   @media (max-width: 768px) {
//     overflow: hidden;
//     flex-direction: column;
//     max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
//     transition: max-height 0.3s ease-in;
//     width: 100%;
//   }
// `;


// const Icon = styled.div`
//     display: none;
//     margin-top: .3em;
//     width: 3em;
//     height: 4px;
//     background-color: black;
//     @media (max-width: 768px) {
//         display: flex;;
//     }
// `
// const IconMiddle = styled(Icon)`
//     /* margin-top: 0.3em; */
// `
// const IconBottom = styled(Icon)`
//     /* margin-top: 0.3em; */
// `

const NavDesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    min-height: 5em;
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 24px 0px;

    @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    min-height: ${({ isOpen }) => (isOpen ? '20em' : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`
const NavDesktopListLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
  }
`
const NavDesktopListRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
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



