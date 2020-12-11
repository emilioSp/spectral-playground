const { Spectral, Document, Parsers, isOpenApiv3 } = require("@stoplight/spectral");
const fs = require('fs');
const path = require('path');

(async () => {
  const yaml = fs.readFileSync(path.resolve(__dirname, '../public/performance.yaml'));
  const ruleset = fs.readFileSync(path.resolve(__dirname, '../public/ruleset.yaml'));
  const myOpenApiDocument = new Document(yaml.toString(), Parsers.Yaml);
  const spectral = new Spectral();
  spectral.registerFormat("oas3", isOpenApiv3);
  await spectral.loadRuleset('https://teamdigitale.github.io/api-oas-checker/spectral.yml');
  const results = await spectral.run(myOpenApiDocument);
  console.log('here are the results', results);
})();