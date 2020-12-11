import { Document, isOpenApiv3, Parsers, Spectral } from '@stoplight/spectral';

export const validate = async () => {
  const el = document.getElementById('results');
  el.innerHTML = `<pre>WAIT!</pre>`;
  const yaml = window.monacoEditor.getModel().getValue();
  const myOpenApiDocument = new Document(yaml, Parsers.Yaml);
  const spectral = new Spectral();
  spectral.registerFormat('oas3', isOpenApiv3);
  await spectral.loadRuleset(`${location.href}ruleset.yaml`);
  const results = await spectral.run(myOpenApiDocument);
  console.log('here are the results', results);
  el.innerHTML = `<pre>${JSON.stringify(results, null, 2)}</pre>`;
}

window.onload = () => {
  const el = document.getElementById('button');
  el.onclick = validate;
}
