import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './Editor.js';

const App = () => {
  const [spectralResult, setSpectralResult] = useState(null);

  const handleOnValidate = results => {
    setSpectralResult(results);
  }

  return <>
  <Editor onValidate={handleOnValidate}/>
  <div style={{ height: '50vh', overflow: 'auto' }}>
    {spectralResult && <pre> Found {spectralResult.length} problems:
      { JSON.stringify(spectralResult, null, 2) }
    </pre>}
  </div>
    </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("react")
);