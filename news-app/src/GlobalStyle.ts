import { createGlobalStyle } from "styled-components";
import Reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${Reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: lightgray;
  }
`;