import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import StarFull from '../../assets/svg/starFull.inline.svg'
import StarHalf from '../../assets/svg/starHalf.inline.svg'
import AfterpayLogo from '../../assets/img/afterpayLogo.png'
import { ColorSwatchMistWhiteSole, NavyNightWhiteSole, JetBlackWhiteSole, JetBlackBlackSole, KaikuraWhiteWhiteSole, CharcoalCharcoalSole, ChalkWhiteSole, ChomonixDarkGreySole, HarvestWhiteSole, BoughTaupeSole, BlueRidgeWhiteSole, HeatheredBlackSunnyGoldSole, SolWhiteSole, LilacWhiteSole } from './colorSwatches'
import SizeSelector from '../sizeSelector'






export default function ProductInfo({ productItems }) {
// console.log(productItems.title)

    return(
        <ProductInfoWrapper>
            <StyledLink to={``}>Home /</StyledLink>
            <StyledLink to={``}> Men's Shoes /</StyledLink>
            <StyledLink to={``}> Everyday Sneakers /</StyledLink>
            
          <h1>{productItems[0].title}</h1>
          <h2>{`$ ${productItems[0].price}`}</h2>
        
        <p>or 4 interest-free installments of $24.50 by <span><StyledAfterpayLogo src={AfterpayLogo} alt="afterpay logo"></StyledAfterpayLogo></span></p>

        <div><StyledStarFull /><StyledStarFull /><StyledStarFull /><StyledStarFull /><StarHalf /> <StyledReviewLink to={``}>(1963)</StyledReviewLink></div>

        <p>CLASSICS:</p><StyledSwatchWrapper><ColorSwatchMistWhiteSole /><NavyNightWhiteSole /><JetBlackWhiteSole /><JetBlackBlackSole /><KaikuraWhiteWhiteSole /></StyledSwatchWrapper>
        <p>LIMITED EDITION:</p><CharcoalCharcoalSole /><ChalkWhiteSole /><ChomonixDarkGreySole /><HarvestWhiteSole /><BoughTaupeSole /><BlueRidgeWhiteSole /><HeatheredBlackSunnyGoldSole />
        <div><SolWhiteSole /><LilacWhiteSole /></div>

        <div><p>Also available in <UnderLinedLink to={''}>Women's Sizes</UnderLinedLink></p></div>

        <SizeSelector />

        <div><p>This style is available in whole sizes only. In between sizes? We recommend you size down. <UnderLinedLink to={''}>See Size Chart</UnderLinedLink></p></div>

        </ProductInfoWrapper>
    );

};

const ProductInfoWrapper = styled.div`
    margin-left: 2em;
`

const StyledSwatchWrapper = styled.div`
        margin: 0, 5px
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: black;
    font-family: 'Hurme Geometric Sans';
    font-weight: bold;
    font-size: 11px;
    margin: 5px 0;
    
    &:hover {
    text-decoration: underline; 
}
`
const UnderLinedLink = styled(StyledLink)`
    text-decoration: underline;
    font-family: 'Hurme Geometric Sans Bold';
    
`

const StyledAfterpayLogo = styled.img`
    height: 12px;
    vertical-align: middle;
`
const StyledReviewLink = styled(props => <Link {...props} />)`

    text-decoration: underline;
    color: black;
    font-size: 12px;
`

const StyledStarFull = styled(StarFull)`
    margin-right: 5px;
`