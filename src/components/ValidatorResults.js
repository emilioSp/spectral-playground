import React from 'react';

const displayResults = results => {
  return results.map(r =>
    <tr key={r.fingerprint}>
      <td>{r.severity}</td>
      <td>{r.range.start.line}</td>
      <td style={{wordBreak: 'break-all'}}>{`Strings (non enum) must specify a maximum length. #/paths/~1{idA2A}~1BT~1{codBanca}~1esitoapplicativo~1ack/get/responses/200/content/application~1json/schema/properties/risultati/items/properties/location property should be defined`}</td>
    </tr>
  )
}

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
      {displayResults(props.results)}
      </tbody>
    </table>
  </div>
}