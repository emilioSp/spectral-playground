import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import * as monaco from 'monaco-editor';
import debounce from 'lodash.debounce';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  editor: {
    height: 'calc(100vh - 80px)',
    overflow: 'auto',
  }
});

export const Editor = React.forwardRef((props, editorRef) => {
  const editorEl = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    const initMonaco = async () => {
      const { data: yaml} = await axios.get('performance.yaml');
      editorRef.current = monaco.editor.create(editorEl.current, {
        value: [yaml].join('\n'),
        language: 'yaml',
        glyphMargin: true,
        theme: 'vs-dark'
      });
      editorRef.current.onDidChangeModelContent(debounce(e => props.onChange(), 1000));
    }
    initMonaco();
  }, [])

  return <>
    <div ref={editorEl} className={classes.editor}></div>
  </>;
});