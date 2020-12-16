import React from 'react';
import { Badge, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  version: {
    backgroundColor: '#fff',
    color: '#06c'
  },
  invert: {
    filter: 'invert(100)'
  }
});

export const Header = () => {
  const classes = useStyles();
  return <nav className="navbar bg-primary text-white flex-md-nowrap justify-content-start p-2 pl-4 pr-4">
    <img className="p-2" src='it.svg' alt='it logo' />
    <img className="p-2" src='loghetto.svg' alt='checker logo' />
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
    <Icon className={`p-2 ${classes.invert}`} icon="it-github" size="lg" />
  </nav>
}