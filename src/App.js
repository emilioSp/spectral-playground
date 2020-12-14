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
    <Container fluid="false">
      <Row>
        <Col md="1">
          <Menu />
        </Col>
        <Col md="11" className="bg-primary text-white">
          <Row>
            <Col md="12" className="p-3">
              <Header />
            </Col>
          </Row>
          <Row className="p-3">
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