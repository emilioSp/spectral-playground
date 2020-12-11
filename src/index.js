import * as monaco from 'monaco-editor';
import { validate } from './spectral-browser.js';
import axios from 'axios';

export const getYaml = async () => {
  const response = await axios.get('performance.yaml');
  return response.data;
}

(async () => {
  const yaml = await getYaml();
  window.monacoEditor = monaco.editor.create(document.getElementById('root'), {
    value: [yaml].join('\n'),
    language: 'yaml'
  });
})();