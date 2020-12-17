import React from 'react';
import { Badge, Icon, Container, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  version: {
    backgroundColor: 'var(--white)',
    color: 'var(--primary)'
  },
  headerHeight: {
    height: '80px'
  }
});

export const Header = props => {
  const classes = useStyles();
  const leftSection = classNames({
      'col-md-2': !props.isExtended,
      'col-md-1': props.isExtended,
      'bg-white': !props.isExtended,
    }, 'd-flex', 'align-items-center');

  const rightSection = classNames({
    'col-md-10': !props.isExtended,
    'col-md-11': props.isExtended
  }, 'd-flex', 'justify-content-start', 'align-items-center');

  const iconClassNames = classNames({
    'icon-white': props.isExtended,
    'icon-primary': !props.isExtended
  }, 'mx-4');

  return <header>
    <Container fluid={true} className="p-0">
        <Row noGutters className={`bg-primary text-white ${classes.headerHeight}`}>
          <Col className={leftSection}>
            <Icon role='button' className={iconClassNames} icon="it-burger" size="lg" />
          </Col>
          <Col className={rightSection}>
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