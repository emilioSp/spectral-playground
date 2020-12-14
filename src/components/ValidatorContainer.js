import React, { useState, useCallback } from 'react';
import { Editor } from './Editor.js';
import { Document, Parsers } from '@stoplight/spectral';
import { getSpectral } from '../spectral.js';
import * as monaco from 'monaco-editor';
import { ValidatorController } from './ValidatorController.js';
import { ValidatorResults } from './ValidatorResults.js';
import { Row, Col } from 'design-react-kit';

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
    <Row className="no-gutters">
      <Col md="7">
        <Editor ref={editor}/>
      </Col>
      <Col md="5">
        <Row className="bg-white">
          <Col md="12" className="bg-white" style={{padding: '10px'}}>
            <ValidatorController onValidate={validate} />
          </Col>
        </Row>
        <Row style={{height: 'calc(100vh - 200px)', overflow: 'scroll'}}>
          <Col md="12" className="bg-white">
            <ValidatorResults results={spectralResult}/>
          </Col>
        </Row>
      </Col>
    </Row>
    </>
}