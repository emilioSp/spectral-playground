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
  const [isValidating, setIsValidating] = useState(false);
  const editor = React.createRef = {};
  const decoration = React.createRef = [];
  decoration.current = [];

  const validate = useCallback(
    async () => {
      console.log('validating');
      setIsValidating(true);
      editor.current.deltaDecorations(decoration.current, []);
      setSpectralResult(null);
      const yaml = editor.current.getModel().getValue();
      const document = new Document(yaml, Parsers.Yaml);
      const spectral = await getSpectral();
      const results = await spectral.run(document);
      const newDecorations = [];
      for (const result of results) {
        newDecorations.push({
          range: new monaco.Range(result.range.start.line,1, result.range.end.line,1),
          options: {
            isWholeLine: true,
            className: 'myContentClass',
            glyphMarginClassName: 'myGlyphMarginClass'
          }
        });
      }
      decoration.current = editor.current.deltaDecorations([], newDecorations);
      setSpectralResult(results);
      setIsValidating(false);
    }, []);

  const revealLine = useCallback(({ line, character }) => {
    editor.current.revealLineInCenter(line);
    editor.current.setPosition({ lineNumber: line, column: character });
    editor.current.focus();
  }, []);

  return <>
    <Row className="no-gutters">
      <Col md="7">
        <Editor ref={editor} onChange={validate}/>
      </Col>
      <Col md="5">
        <Row className="bg-white">
          <Col md="12" className="bg-white" style={{padding: '10px'}}>
            <ValidatorController onValidate={validate} />
          </Col>
        </Row>
        <Row style={{height: 'calc(100vh - 124px)', overflow: 'scroll'}}>
          <Col md="12" className="bg-white">
            <ValidatorResults isValidating={isValidating} results={spectralResult} onResultClick={revealLine}/>
          </Col>
        </Row>
      </Col>
    </Row>
    </>
}