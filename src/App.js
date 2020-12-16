import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';

const App = () => {
  return <>
    <Header />
    <Main />
    </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("react")
);