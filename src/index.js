import * as monaco from 'monaco-editor';
import axios from 'axios';

const getYaml = async () => {
  const response = await axios.get('performance.yaml');
  return response.data;
}

(async () => {
  const yaml = await getYaml();
  monaco.editor.create(document.getElementById('root'), {
    value: [yaml].join('\n'),
    language: 'yaml'
  });
})();