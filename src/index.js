import * as monaco from 'monaco-editor';
import axios from 'axios';
import { Spectral, Document, Parsers, isOpenApiv3 } from '@stoplight/spectral';

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
  const myOpenApiDocument = new Document(yaml.toString(), Parsers.Yaml);
  const spectral = new Spectral();
  spectral.registerFormat('oas3', isOpenApiv3);
  await spectral.loadRuleset(`${location.origin}/ruleset.yaml`);
  const results = await spectral.run(myOpenApiDocument);
  console.log('here are the results', results);
  const el = document.getElementById('results');
  el.innerHTML = `<pre>${JSON.stringify(results, null, 2)}</pre>`;

})();