import { createGlobalStyle } from 'styled-components';

import HurmeGeometricSansNoTwoWoff from './HurmeGeometricSansNoTwo.woff';
import HurmeGeometricSansNoTwoWoff2 from './HurmeGeometricSansNoTwo.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Hurme Geometric Sans';
        src: local('Hurme Geometric Sans'), local('HurmeGeometricSansNoTwoWoff'),
        url(${HurmeGeometricSansNoTwoWoff}) format('woff'),
        url(${HurmeGeometricSansNoTwoWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;