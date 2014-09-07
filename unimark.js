Unimark = {};

Unimark.parsers = {};

Unimark.parsers.markdown = {
  constructor: Showdown.converter,
  aliases: ['md'],
};


Unimark.converter = function() {
  this.parsers = {};
  var parsers = this.parsers;
  _.each(Unimark.parsers, function(dict, key) {
    parsers[key] = new dict.constructor();

    _.each(dict.aliases, function(alias) {
      parsers[alias] = parsers[key];
    });
  });
};


_.extend(Unimark.converter.prototype, {

  makeHtml: function(doc) {
    var array = doc.split(/^(\+\+\+.*)$/m);
    var results = [];
    var currentChunk = 'md';
    var parsers = this.parsers;

    _.each(array, function(chunk) {
      if(chunk.match(/^\+\+\+[^\n]*$/m)) {
        currentChunk = chunk.replace(/^\++\s*/, '').replace(/\s*$/, '').toLowerCase();
        if(currentChunk.length === 0) currentChunk = 'md';
      } else {
        if(parsers[currentChunk]) {
          results.push(parsers[currentChunk].makeHtml(chunk));
        } else {
          results.push('[??? ' + currentChunk + '] ' + chunk);  
        }
        
      }
    });


    return results.join('\n');
  },

});

Template.registerHelper("unimark", new Template('unimark', function () {
  var view = this;
  var content = '';
  if (view.templateContentBlock) {
    content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
  }
  var converter = new Unimark.converter();
  return HTML.Raw(converter.makeHtml(content));
}));
