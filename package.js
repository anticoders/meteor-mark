
Package.describe({
  summary: "Universal text document markup syntax",
});

Package.on_use(function (api, where) {

  if(api.export) {

    api.use(['handlebars', 'underscore', 'showdown'], 'client');
    api.export('Unimark', 'client');
    
  }


  api.add_files([
    'unimark.js',
    'chunks/text.js',
    'chunks/image.js',
    'chunks/code.js',
    'chunks/template.js',
  ], 'client');


});








