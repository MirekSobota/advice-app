import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body{
  font-family: 'Manrope', sans-serif;
  margin: auto;
  background: hsl(218, 23%, 16%);
}
`;
