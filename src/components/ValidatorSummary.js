import React from 'react';
import { Badge } from 'design-react-kit';

export const ValidatorSummary = props => {
  if (!props.results) return null;

  const errors = props.results.filter(r => r.severity === 1);
  const warnings = props.results.filter(r => r.severity !== 1);

  return <h4 className="text-center">
      <Badge
        color="danger"
        pill={false}
        tag="span"
      >
        {errors.length} errori
      </Badge>
      <Badge
        color="warning"
        pill={false}
        tag="span"
      >
        {warnings.length} warnings
      </Badge>
    </h4>
}