import React, { useState, useCallback } from 'react';
import { Editor } from './Editor.js';
import { Document, Parsers } from '@stoplight/spectral';
import { getSpectral } from '../spectral.js';
import * as monaco from 'monaco-editor';
import { ValidatorController } from './ValidatorController.js';
import { ValidatorResults } from './ValidatorResults.js';
import { Row, Col, Container } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { ValidatorSummary } from './ValidatorSummary.js';

const useStyles = createUseStyles({
  editorMarginHighlightSev1: {
    background: 'var(--danger)'
  },
  editorHighlightLine: {
    background: 'var(--primary)'
  }
})

export const Main = () => {
  const [spectralResult, setSpectralResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const editor = React.createRef = {};
  const decoration = React.createRef = [];
  decoration.current = [];
  const classes = useStyles();

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
            className: classes.editorHighlightLine,
            glyphMarginClassName: classes.editorMarginHighlightSev1
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

  // <Row className={classes.validatorResultsContainer}>

  return <main>
          <Container fluid="true">
            <Row noGutters>
              <Col md="7">
                <Editor ref={editor} onChange={validate}/>
              </Col>
              <Col md="5">
                <ValidatorController onValidate={validate} isValidating={isValidating}/>
                <ValidatorSummary results={spectralResult} />
                <ValidatorResults isValidating={isValidating} results={spectralResult} onResultClick={revealLine}/>
              </Col>
            </Row>
          </Container>
        </main>
}