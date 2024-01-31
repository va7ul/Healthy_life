import { createTheme } from '@mui/material/styles';
import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';

import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';
import PoppinsMedium from './assets/fonts/Poppins-Medium.ttf';
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';

export const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 834,
      desktop: 1440,
    },
  },
  palette: {
    white: {
      main: '#FFFFFF',
    },
    blackone: {
      main: '#050505',
    },
    violet: {
      main: '#B6C3FF',
    },
    blacktwo: {
      main: '#0F0F0F',
    },
    litegreen: {
      main: '#45FFBC',
    },
    grey: {
      main: '#B6B6B6',
    },
    greenlite: {
      main: '#E3FFA8',
    },
    greyone: {
      main: '#292928',
    },
    pink: {
      main: '#FFC4F7',
    },
    yellow: {
      main: '#FFF3B7',
    },
  },
});

export const GlobalStyle = createGlobalStyle`
:root{
--primary-color-white:#FFFFFF; 
--primary-color-black-one:#050505;
--primary-color-violet:#B6C3FF;
--primary-color-black-two:#0F0F0F;
--primary-color-lite-green:#45FFBC;
--primary-color-grey:#B6B6B6;
--primary-color-green-lite:#E3FFA8;

--secondary-color-grey-one:#292928;
--secondary-color-pink:#FFC4F7;
--secondary-color-yellow:#FFF3B7;


--main-font-size: 14px;
--main-line-height:1.4;
--main-letter-spacing:0.02em; 
--transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

  @font-face {
    font-family: 'Poppins400';
    src: local("Poppins400"), url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins500';
    src: local("Poppins500"), url(${PoppinsMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins600';
    src: url(${PoppinsSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins700';
    src: url(${PoppinsBold}) format('truetype');
  }



body {
  margin: 0;
  font-family: 'Poppins400', sans-serif;
  background-color: var(--primary-color-black-one);
  color: var(--primary-color-white); 
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a
 {
  color: currentColor;
  text-decoration: none;
}

button {
    cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
     appearance: textfield;
}
`;

export const hidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
