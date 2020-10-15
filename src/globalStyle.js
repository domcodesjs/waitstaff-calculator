import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: inherit;
    font-size: 62.5%;
  }

  body { 
    font-size: 1.6rem;
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalStyle;
