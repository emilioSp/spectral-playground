import React from 'react';

const displayResults = results => {
  return results.map(r =>
    <div key={r.fingerprint} className="row">
      <div className="col">
        <ul>{r.message}</ul>
      </div>
    </div>
  )
}

export const ValidatorResults = props => props.results ? displayResults(props.results) : null;