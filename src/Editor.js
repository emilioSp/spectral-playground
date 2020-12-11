import React, { useRef, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as monaco from 'monaco-editor';
import { Document, Parsers } from '@stoplight/spectral';
import { getSpectral } from './spectral.js';
import './Editor.css';

export const Editor = props => {
  const [isValidating, setIsValidating] = useState(false);
  const editorEl = useRef(null);
  const editor = useRef({});

  const validate = useCallback(
    async () => {
      setIsValidating(true);
      props.onValidate(null);
      const yaml = editor.current.getModel().getValue();
      const myOpenApiDocument = new Document(yaml, Parsers.Yaml);
      const spectral = await getSpectral();
      const results = await spectral.run(myOpenApiDocument);
      const sev1 = results.filter(r => r.severity === 1);
      console.log(sev1);
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
      setIsValidating(false);
      props.onValidate(results);
    }, []);

  useEffect(() => {
    const initMonaco = async () => {
      const { data: yaml} = await axios.get('performance.yaml');
      editor.current = monaco.editor.create(editorEl.current, {
        value: [yaml].join('\n'),
        language: 'yaml',
        glyphMargin: true
      });
    }
    initMonaco();
  }, [])

  return <>
    <div ref={editorEl} style={{ height: '50vh', overflow: 'auto' }}></div>
    <button onClick={ validate }>Validate</button>
    { isValidating && <div>Wait...</div> }
  </>;
}