
Package.describe({
  summary: "Universal text document markup syntax",
});

Package.on_use(function (api, where) {

  if(api.export) {

    api.use(['handlebars', 'underscore'], 'client');
    api.export('Unimark', 'client');
    
  }


  api.add_files([
    'files/_.js',
    'files/marked.js',
    'files/unimark.js',
  ], 'client');


});








