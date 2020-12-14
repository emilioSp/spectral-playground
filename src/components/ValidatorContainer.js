import React, { useState, useCallback } from 'react';
import { Editor } from './Editor.js';
import { Document, Parsers } from '@stoplight/spectral';
import { getSpectral } from '../spectral.js';
import * as monaco from 'monaco-editor';
import { ValidatorController } from './ValidatorController.js';
import { ValidatorResults } from './ValidatorResults.js';

export const ValidatorContainer = () => {
  const [spectralResult, setSpectralResult] = useState(null);
  const editor = React.createRef = {};

  const validate = useCallback(
    async () => {
      console.log('validating');
      const yaml = editor.current.getModel().getValue();
      const myOpenApiDocument = new Document(yaml, Parsers.Yaml);
      const spectral = await getSpectral();
      const results = await spectral.run(myOpenApiDocument);
      const sev1 = results.filter(r => r.severity === 1);
      for (const sev of sev1) {
        editor.current.deltaDecorations([], [
          {
            range: new monaco.Range(sev.range.start.line,1,sev.range.end.line,1),
            options: {
              isWholeLine: true,
              className: 'myContentClass',
              glyphMarginClassName: 'myGlyphMarginClass'
            }
          }
        ]);
      }
      setSpectralResult(results);
    }, []);

  return <>
    <div className="col-8">
    <Editor ref={editor}/>
    </div>
    <div className="col">
      <div className="row bg-white">
        <ValidatorController onValidate={validate} />
      </div>
      <div className="row" style={{height: '70vh', overflow: 'scroll'}}>
        <ValidatorResults results={spectralResult}/>
      </div>
    </div>
    </>
}