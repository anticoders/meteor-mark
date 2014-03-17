
var TextChunk = function() {};

_.extend(TextChunk.prototype, {
  makeHtml: function(html) {
    return html;
  },
});

Unimark.parsers.text = {
  constructor: TextChunk,
};

