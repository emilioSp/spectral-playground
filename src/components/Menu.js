import React from 'react';
import { Button, FormGroup } from 'design-react-kit';

export const Menu = () => <>
  <FormGroup
    className="m-4"
    tag="div"
  >
    <Button
      className="py-2 px-3"
      color="primary"
      icon
      tag="button"
    >
      Upload file
    </Button>
  </FormGroup>
  <FormGroup
    className="m-4"
    tag="div"
  >
    <Button
      className="py-2 px-3"
      color="primary"
      icon
      tag="button"
    >
      From url
    </Button>
  </FormGroup>
  <FormGroup
    className="m-4"
    tag="div"
  >
    <Button
      className="py-2 px-3"
      color="primary"
      icon
      tag="button"
    >
      Template
    </Button>
  </FormGroup>
</>