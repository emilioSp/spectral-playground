import React from 'react';
import { Badge, Icon, Navbar, Container, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  version: {
    backgroundColor: '#fff',
    color: '#06c'
  },
  headerHeight: {
    height: '80px'
  }
});

export const Header = () => {
  const classes = useStyles();
  return <header>
    <Container fluid={true} className="p-0">
        <Row noGutters className={`bg-primary text-white ${classes.headerHeight}`}>
          <Col md="2" className="d-flex align-items-center bg-white">
            <Icon role='button' color="primary" className="mx-4" icon="it-burger" size="lg" />
          </Col>
          <Col md="10" className="d-flex justify-content-start align-items-center">
            <img className="ml-4 mr-2" src='it.svg' alt='it logo' />
            <img className="mx-2" src='loghetto.svg' alt='checker logo' />
            <h5 className="m-0">Italian OpenAPI Validation Checker</h5>
            <Badge
              className={`mr-1 m-2 ${classes.version}`}
              color={'primary'}
              pill
              href="#"
              tag="span"
            >
              {/*TODO: webpack plugin provider. Get info from the package json*/}
              Beta 0.2
            </Badge>
            <h6 className="m-0 ml-auto">Info + Repo</h6>
            <Icon color="white" className="p-2" icon="it-github" size="lg" />
          </Col>
        </Row>
      </Container>
  </header>
}