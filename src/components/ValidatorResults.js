import React from 'react';
import './ValidatorResults.css';

const displayResults = results => {
  return <div className="main">
    <div className="message-results">
      {results.map(r => <dl key={r.fingerprint}>{r.message}</dl>)}
    </div>
  </div>;
}

export const ValidatorResults = props => props.results ? displayResults(props.results) : null;