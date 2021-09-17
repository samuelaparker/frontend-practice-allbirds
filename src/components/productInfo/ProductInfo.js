import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import StarFull from '../../assets/svg/starFull.inline.svg'
import StarHalf from '../../assets/svg/starHalf.inline.svg'
import AfterpayLogo from '../../assets/img/afterpayLogo.png'
import { ColorSwatchMistWhiteSole, NavyNightWhiteSole, JetBlackWhiteSole, JetBlackBlackSole, KaikuraWhiteWhiteSole, CharcoalCharcoalSole, ChalkWhiteSole, ChomonixDarkGreySole, HarvestWhiteSole, BoughTaupeSole, BlueRidgeWhiteSole, HeatheredBlackSunnyGoldSole, SolWhiteSole, LilacWhiteSole } from './colorSwatches'






export default function ProductInfo({ productItems }) {
// console.log(productItems.title)

    return(
        <div>
            <StyledLink to={``}>Home /</StyledLink>
            <StyledLink to={``}> Men's Shoes /</StyledLink>
            <StyledLink to={``}> Everyday Sneakers /</StyledLink>
            
          <h1>{productItems[0].title}</h1>
          <h2>{`$ ${productItems[0].price}`}</h2>
        
        <p>or 4 interest-free installments of $24.50 by <span><StyledAfterpayLogo src={AfterpayLogo} alt="afterpay logo"></StyledAfterpayLogo></span></p>

        <div><StarFull /><StarFull /><StarFull /><StarFull /><StarHalf /> <StyledReviewLink to={``}>(1963)</StyledReviewLink></div>

        <p>CLASSICS:</p><ColorSwatchMistWhiteSole /><NavyNightWhiteSole /><JetBlackWhiteSole /><JetBlackBlackSole /><KaikuraWhiteWhiteSole />
        <p>LIMITED EDITION:</p><CharcoalCharcoalSole /><ChalkWhiteSole /><ChomonixDarkGreySole /><HarvestWhiteSole /><BoughTaupeSole /><BlueRidgeWhiteSole /><HeatheredBlackSunnyGoldSole />
        <div><SolWhiteSole /><LilacWhiteSole /></div>

        </div>
    );

};

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: black;
    font-family: 'Hurme Geometric Sans';
    font-weight: bold;
    font-size: 11px;
    
    &:hover {
    text-decoration: underline; 
}
`


const StyledAfterpayLogo = styled.img`
    height: 10px;
    vertical-align: middle;
`
const StyledReviewLink = styled(props => <Link {...props} />)`

    text-decoration: underline;
    color: black;
    font-size: 12px;
`