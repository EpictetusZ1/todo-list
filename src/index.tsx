import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/Global.styles";
import FetchData from "./components/FetchData";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <FetchData />
  </React.StrictMode>,
  document.getElementById('root')
);

