Unimark = {};


Handlebars.registerHelper('unimark', function(data) {
  return new Handlebars.SafeString(Unimark.unimark(data));
});




