import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    padding: '10px'
  }
});

export const Header = () => {
  const classes = useStyles();
  return <h5 className={classes.header}>Italian OpenAPI Validation Checker</h5>
}