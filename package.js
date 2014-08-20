
Package.describe({
  summary: "Universal text document markup syntax",
});

Package.on_use(function (api, where) {

  api.use(['templating', 'ui', 'underscore', 'showdown'], 'client');

  api.add_files([
    'unimark.js',
    'chunks/text.js',
    'chunks/image.js',
    'chunks/code.js',
    'chunks/template.js',
  ], 'client');

  api.export('Unimark', 'client');

});








