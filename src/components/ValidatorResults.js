import React from 'react';

export const ValidatorResults = props => {
  if(!props.results) return null;

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
      <tr key={r.fingerprint}>
        <td style={{textAlign: 'center'}}>{r.severity}</td>
        <td style={{textAlign: 'center'}}>{r.range.start.line}</td>
        <td style={{wordBreak: 'break-all'}}>{r.message}</td>
      </tr>)
      }
      </tbody>
    </table>
  </div>
}