import React, { useRef, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as monaco from 'monaco-editor';
import { Document, Parsers } from '@stoplight/spectral';
import { getSpectral } from './spectral.js';

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
      console.log('here are the results', results);
      setIsValidating(false);
      props.onValidate(results);
    }, []);

  useEffect(() => {
    const initMonaco = async () => {
      const { data: yaml} = await axios.get('performance.yaml');
      editor.current = monaco.editor.create(editorEl.current, {
        value: [yaml].join('\n'),
        language: 'yaml'
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