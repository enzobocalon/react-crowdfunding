import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    min-height: 100vh;
    width: 100%;
    font-family: 'Commissioner', sans-serif;
    font-size: 16px;
    background-color: #fafafa;
  }

  button, a {
    font-family: inherit;
  }
`;