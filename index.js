const { Spectral, Document, Parsers, isOpenApiv3 } = require("@stoplight/spectral");
const fs = require('fs');
const path = require('path');

(async () => {
  const yaml = fs.readFileSync(path.resolve(__dirname, 'petstore.yaml'));
  const myOpenApiDocument = new Document(yaml.toString(), Parsers.Yaml);
  const spectral = new Spectral();
  spectral.registerFormat("oas3", isOpenApiv3);
  await spectral.loadRuleset(path.resolve(__dirname, 'ruleset.yaml'));
  const results = await spectral.run(myOpenApiDocument);
  console.log('here are the results', results);
})();