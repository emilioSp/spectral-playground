import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Header } from './components/Header.js';
import { Menu } from './components/Menu.js';
import { ValidatorContainer } from './components/ValidatorContainer.js';
import { Container, Row, Col } from 'design-react-kit';


const App = () => {
  return <>
    <nav className="navbar bg-primary text-white flex-md-nowrap p-0">
      <Header />
    </nav>
    <Container fluid="true">
      <Row className="bg-primary">
        <nav className="col-md-2 d-none d-md-block bg-white">
          <Menu />
        </nav>
        <Col md="10" className="text-white">
          <Row>
            <Col md="12">
              <ValidatorContainer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("react")
);