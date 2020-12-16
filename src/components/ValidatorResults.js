import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  breakWords: {
    wordBreak: 'break-all'
  },
  enableScrollResults: {
    height: 'calc(100vh - 239px)',
    overflow: 'scroll'
  }
});

export const ValidatorResults = props => {
  if (props.isValidating || !props.results) return null;

  const classes = useStyle();

  return <div className={`table-responsive-md ${classes.enableScrollResults}`}>
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
          <tr role="button" key={r.fingerprint} onClick={() => props.onResultClick({ line: r.range.start.line, character: r.range.start.character })}>
            <td className="text-center">{r.severity}</td>
            <td className="text-center">{r.range.start.line}</td>
            <td className={classes.breakWords}>{r.message}</td>
          </tr>)
          }
          </tbody>
        </table>
      </div>
}