import { createGlobalStyle } from 'styled-components';

import HurmeGeometricSansNoTwoWoff from './HurmeGeometricSansNoTwo.woff';
import HurmeGeometricSansNoTwoWoff2 from './HurmeGeometricSansNoTwo.woff2';
import HurmeGeometricSans3Bold from './HurmeGeometricSans3Bold.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Hurme Geometric Sans';
        src: local('Hurme Geometric Sans'), local('HurmeGeometricSansNoTwoWoff'),
        url(${HurmeGeometricSansNoTwoWoff}) format('woff'),
        url(${HurmeGeometricSansNoTwoWoff2}) format('woff2'),
        url(${HurmeGeometricSans3Bold}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Hurme Geometric Sans Bold';
        src: local('Hurme Geometric Sans Bold'), local('HurmeGeometricSans3Bold'),
        url(${HurmeGeometricSans3Bold}) format('woff');
    }
`;

