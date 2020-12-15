import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  cursorPointer: {
    cursor: 'pointer'
  },
  cellCenterText: {
    textAlign: 'center'
  },
  cellBreakWords: {
    wordBreak: 'break-all'
  }
});

export const ValidatorResults = props => {
  if (props.isValidating) return 'Validation in progress...';
  if (!props.results) return null;

  const classes = useStyle();

  return <div className="table-responsive-md">
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
        <td className={classes.cellCenterText}>{r.severity}</td>
        <td className={classes.cellCenterText}>{r.range.start.line}</td>
        <td className={classes.cellBreakWords}>{r.message}</td>
      </tr>)
      }
      </tbody>
    </table>
  </div>
}