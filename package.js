
Package.describe({
  name:     "anticoders:unimark",
  version:  "0.5.1",
  summary:  "Universal text document markup syntax",
  git:      "https://github.com/anticoders/meteor-unimark.git",
});

Package.on_use(function (api, where) {
  api.versionsFrom('0.9.0');
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








