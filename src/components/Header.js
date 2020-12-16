import React from 'react';
import { Badge, Icon, Navbar } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  version: {
    backgroundColor: '#fff',
    color: '#06c'
  }
});

export const Header = () => {
  const classes = useStyles();
  return <header>
    <Navbar tag='nav' className="bg-primary text-white justify-content-start p-2 px-4">
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
      <Icon color="white" className="p-2" icon="it-github" size="lg" />
    </Navbar>
  </header>
}