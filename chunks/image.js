
var ImageChunk = function() {};

_.extend(ImageChunk.prototype, {
  makeHtml: function(html) {
    return html;
  },
});

Unimark.parsers.image = {
  constructor: TextChunk,
  aliases: ['img'],
};

