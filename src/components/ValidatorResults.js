import React from 'react';
import { createUseStyles } from 'react-jss';
import { Badge } from 'design-react-kit';

const useStyle = createUseStyles({
  cursorPointer: {
    cursor: 'pointer'
  },
  center: {
    textAlign: 'center'
  },
  breakWords: {
    wordBreak: 'break-all'
  }
});

export const ValidatorResults = props => {
  if (props.isValidating) return 'Validation in progress...';
  if (!props.results) return null;

  const errors = props.results.filter(r => r.severity === 1);
  const warnings = props.results.filter(r => r.severity !== 1);

  const classes = useStyle();

  return <>
      <h4 className={classes.center}>
        <span>Trovati </span>
      <Badge
        color="danger"
        pill={false}
        tag="span"
      >
        {errors.length} errori
      </Badge> <span> e </span>
        <Badge
          color="warning"
          pill={false}
          tag="span"
        >
          {warnings.length} warnings
        </Badge>
    </h4>
  <div className="table-responsive-md">
    <table className="table align-content-center">
      <thead>
      <tr>
        <th>Type</th>
        <th>Line</th>
        <th>Message</th>
      </tr>
      </thead>
      <tbody>
      {
        props.results.map(r =>
      <tr className={classes.cursorPointer} key={r.fingerprint} onClick={() => props.onResultClick({ line: r.range.start.line, character: r.range.start.character })}>
        <td className={classes.center}>{r.severity}</td>
        <td className={classes.center}>{r.range.start.line}</td>
        <td className={classes.breakWords}>{r.message}</td>
      </tr>)
      }
      </tbody>
    </table>
  </div>
    </>
}