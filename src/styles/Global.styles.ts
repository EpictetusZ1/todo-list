import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: rgb(255, 254, 252);
    }
    
    h2 {
      margin: 0.4em;
      height: 1.5em;
      width: auto;
      align-items: center;
      font-family: Verdana, sans-serif;
      font-size: 1.5em;
      letter-spacing: 1px;
      text-align: left;
      color: var(--rose);
    }
    
    h3 {
      margin: 0.4em;
    }
    
    h4 {
      margin: 0.5em 0 0 0.1em;
      font-size: 1.1em;
    }
    
    h6 {
      margin: 0;
      padding: 0;
    }
    
    p {
      padding: 0;
    }
    
`
