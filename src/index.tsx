import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/Global.styles";
import MimicStorage from "./MimicStorage";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <MimicStorage />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

