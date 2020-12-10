import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('root'), {
  value: [
    'function x() {',
    '\tconsole.log("Hello world!");',
    '}'
  ].join('\n'),
  language: 'javascript'
});