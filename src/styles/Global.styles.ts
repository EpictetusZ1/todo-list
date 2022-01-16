import { createGlobalStyle } from "styled-components";

export const COLORS = {
    celeste: "#9cf6fbff",
    lightCyan: "#e1fcfdff",
    mnBlue: "#394f8aff",
    liberty: "#4a5fc1ff",
    desertSand: "#e5b9a8ff",
    champagnePink: "#ead6cdff"
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${COLORS.mnBlue};
  }

  h2 {
    margin: 10px 0;
    height: 1.5em;
    width: auto;
    align-items: center;
    font-family: Verdana, sans-serif;
    font-size: 1.5em;
    letter-spacing: 1px;
    text-align: left;
    color: ${COLORS.desertSand};
  }

  h3 {
    margin: 0.5em 0.3em 0 0; 
  }
  
  h4 {
    font-size: 1.1em;
  }

  h4, h6 {
    margin: 0.5em 0 0 0.1em;
  }
  
  h6 {
    color: ${COLORS.champagnePink};
  }

  p {
    padding: 0;
  }

`
