import React from 'react';
import Logo from '../../assets/allbirdsLogo.inline.svg'
import User from '../../assets/user.inline.svg'
import Help from '../../assets/help.inline.svg'
import Cart from '../../assets/cart.inline.svg'
import styled from 'styled-components'

const Nav = () => {

    return (
        
        <NavDesktopWrapper>
            <NavDesktopListLeft>
                <StyledLink>MEN</StyledLink>
                <StyledLink>WOMAN</StyledLink>
                <StyledLink>NEW ARRIVALS</StyledLink>
            </NavDesktopListLeft>
            <StyledLogo />
            <NavDesktopListRight>
                <StyledLink>SUSTAINABILITY</StyledLink>
                <StyledLink>STORES</StyledLink>
                <StyledUser />
                <StyledHelp />
                <StyledCart />    
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
const StyledLink = styled.a`
    text-decoration: none;
    padding: 0.5em;
`
const StyledUser = styled(User)`
    width: 1.5em;
`
const StyledHelp = styled(Help)`
    width: 1.5em;
`
const StyledCart = styled(Cart)`
    width: 1.5em;
`