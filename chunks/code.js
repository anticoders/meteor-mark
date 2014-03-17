
var CodeChunk = function() {};

_.extend(CodeChunk.prototype, {
  makeHtml: function(doc) {

    var array = doc.split(/^(```.*)$/m);

    var results = [];
    var currentChunk = 'code';

    _.each(array, function(chunk) {
      if(chunk.match(/^```[^\n]*$/m)) {
        currentChunk = chunk.replace(/^`+\s*/, '').replace(/\s*$/, '').toLowerCase();
        if(currentChunk.match(/^[dD@%]$/)) currentChunk = 'desc';
        if(currentChunk.match(/^[cC#]$/)) currentChunk = 'code';
        if(currentChunk.match(/^[rR=]$/)) currentChunk = 'result';
      } else {
        if(!chunk.match(/^[ \t\n]*$/)) {
          results.push(
            '<pre class="uni-code-' + currentChunk + '">' +
            chunk.replace(/^\s*\n/,'').replace(/\n\s*$/,'') +
            '</pre>'
          );
        }
      }
    });



    var result = results.join('\n');

    var result = '<div class="uni-code-terminal">' + result + '</div>';
    return result;
    
  },
});

Unimark.parsers.code = {
  constructor: CodeChunk,
};

