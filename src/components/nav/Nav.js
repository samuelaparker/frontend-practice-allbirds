import React from 'react';
import { Link } from 'gatsby'
import Logo from '../../assets/allbirdsLogo.inline.svg'
import User from '../../assets/user.inline.svg'
import Help from '../../assets/help.inline.svg'
import Cart from '../../assets/cart.inline.svg'
import styled from 'styled-components'


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
                <StyledUser to=""/>
                <StyledHelp to=""/>
                <StyledCart to=""/>    
            </NavDesktopListRight>
        </NavDesktopWrapper>
        
    )
}

export default Nav;

const NavDesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
const StyledUser = styled.div`
    width: 1.5em;
    height: 1.5em;
    background-image: url(${User});
`
const StyledHelp = styled(Help)`
    width: 1.5em;
`
const StyledCart = styled(Cart)`
    width: 1.5em;
`

