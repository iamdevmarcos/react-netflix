import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #111;
    color: #fff;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
`;
