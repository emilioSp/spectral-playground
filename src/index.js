import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './components/Editor.js';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Header } from './components/Header.js';
import { Menu } from './components/Menu.js';
import { ValidatorContainer } from './components/ValidatorContainer.js';


const App = () => {
  const [spectralResult, setSpectralResult] = useState(null);

  const handleOnValidate = results => {
    setSpectralResult(results);
  }

  return <>
    <div className=".container-fluid">
      <div className="row">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col-10 bg-primary text-white">
          <div className="row">
            <div className="col p-3">
              <Header />
            </div>
          </div>
          <div className="row p-3">
            <ValidatorContainer />
          </div>
        </div>
      </div>
    </div>
    </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("react")
);