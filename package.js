
Package.describe({
  name:     "anti:mark",
  version:  "0.6.1",
  summary:  "Universal text document markup syntax",
  git:      "https://github.com/anticoders/meteor-mark.git",
});

Package.on_use(function (api, where) {
  api.versionsFrom('0.9.1');
  api.use(['templating', 'underscore', 'showdown'], 'client');

  api.add_files([
    'unimark.js',
    'chunks/text.js',
    'chunks/image.js',
    'chunks/code.js',
    'chunks/template.js',
  ], 'client');

  api.export('Unimark', 'client');

});
