import React from 'react';
import { Link } from 'gatsby'
import Logo from '../../assets/allbirdsLogo.inline.svg'
import User from '../../assets/user.inline.svg'
import Help from '../../assets/help.inline.svg'
import Cart from '../../assets/cart.inline.svg'
import styled from 'styled-components'
import { GrCart } from "react-icons/gr";


const Nav = () => {

    return (

        <NavDesktopWrapper>
            <NavDesktopListLeft>
                <StyledLink to="" >MEN</StyledLink>
                <StyledLink to="">WOMAN</StyledLink>
                <StyledLink to="">NEW ARRIVALS</StyledLink>
            </NavDesktopListLeft>
            <StyledLogo />
            <NavDesktopListRight>
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

const NavDesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    min-height: 5em;
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 24px 0px;
`
const NavDesktopListLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const NavDesktopListRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StyledLogo = styled(Logo)`
    width: 9em;
`
const StyledLink = styled(props => <Link {...props} />)`
    padding-right: 2rem;
    font-family: sans-serif;
    text-decoration: none;
    color: black;
    
    &:hover {
    color: rgb(92, 92, 92);
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



