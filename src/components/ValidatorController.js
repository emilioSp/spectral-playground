import React from 'react';
import { Button, Icon, Label, Input, FormGroup } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  validatorIconSize: {
    fontSize: '1.5rem'
  }
});

export const ValidatorController = props => {
  const classes = useStyles();
  return <>
        <FormGroup
          className="m-3"
          tag="div"
        >
          <Button
            className="pt-2 pb-2 pl-3 pr-3"
            color="primary"
            icon
            tag="button"
            onClick={ props.onValidate }
          >
            Validate
            <Icon className={`ml-3 ${classes.validatorIconSize}`} color="white" icon="it-refresh"/>
          </Button>
        </FormGroup>
        <FormGroup
          check
          className="m-3"
          tag="div"
        >
          <div className="toggles">
            <Label className="m-0 font-weight-light" check>
              Auto-refresh
              <Input type="checkbox" />
              <span className="lever" />
            </Label>
          </div>
        </FormGroup>
  </>
}