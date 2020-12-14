import React from 'react';
import { Button } from 'design-react-kit';

export const ValidatorController = props =>
    <Button
    color="primary"
    icon={false}
    tag="button"
    onClick={ props.onValidate }
  >
    Validate
  </Button>