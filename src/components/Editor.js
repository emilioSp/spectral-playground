import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import * as monaco from 'monaco-editor';
import './Editor.css';


export const Editor = React.forwardRef((props, editorRef) => {
  const editorEl = useRef(null);

  useEffect(() => {
    const initMonaco = async () => {
      const { data: yaml} = await axios.get('performance.yaml');
      editorRef.current = monaco.editor.create(editorEl.current, {
        value: [yaml].join('\n'),
        language: 'yaml',
        glyphMargin: true,
        theme: 'vs-dark'
      });
    }
    initMonaco();
  }, [])

  return <>
    <div ref={editorEl} style={{ height: 'calc(100vh - 27px)', overflow: 'auto', marginRight: '6px' }}></div>
  </>;
});