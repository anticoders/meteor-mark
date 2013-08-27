

var unimarkChunk = {};

var textReplace = function(text) {
  return text.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
};

unimarkChunk.text = function(chunk) {
  return '<span class="unimark-text"><p>' + textReplace(chunk.content).replace(/\n\s*\n/g, '\n</p><p>\n') + '</p></span>\n\n';
};

unimarkChunk.markdown = function(chunk) {
  return '<span class="unimark-markdown">' + Unimark.marked(chunk.content) + '</span>\n\n';
};

unimarkChunk.code = function(chunk) {
  return _.template('<span class="unimark-code" data-language="<%= language %>">' +
    '<pre><code><%= content %></code></pre>' +
    '</span>\n\n', {
    language: chunk.params.language ? chunk.params.language : chunk.params.lang ? chunk.params.lang : '',
    content: textReplace(chunk.content),
  });
};

unimarkChunk.image = function(chunk) {
  return '<span class="unimark-image"><img src="' + chunk.params.src + '"/>' + chunk.content + '</span>\n\n';
};

unimarkChunk.img = unimarkChunk.image;

unimarkChunk.message = function(chunk) {
  return '<span class="unimark-message">' + chunk.content + '</span>\n\n';
};


var unimark = function(text) {
  if(!text) return "";
  var lines = text.split('\n');

  var chunks = [];
  var chunk = {
    type: '',
    content: '',
    params: {},
  };
  chunks.push(chunk);
  var paramsy = false;
  

  for(var lid in lines) {
    var line = lines[lid];
    var matchNewChunk = line.match(/^\+{3,} ?(.*)$/);

    if(matchNewChunk) {
      /* New chunk line */
      chunk = {
        type: matchNewChunk[1],
        content: '',
        params: true,
      };
      chunks.push(chunk);
      paramsy = true;
      
    } else if(paramsy && line.startsWith('+')) {
      /* Chunk param line */
      var match = line.match(/^\+\s+(\w+):\s*(.*)\s*$/);
      // console.log(match);
      // console.log(line);
      if(match) chunk.params[match[1]] = match[2];
      else paramsy = false;
    } else {
      if(paramsy) {
        paramsy = false;
      } else {
        chunk.content = chunk.content + '\n' + line;
      }
    }

  }

  var result = '';

  for(var cid in chunks) {
    var chunk = chunks[cid];

    if(chunk.type === '') chunk.type = 'markdown';
    if(chunk.type.match(/`+/)) chunk.type = 'code';
    if(unimarkChunk[chunk.type]) {
      result += unimarkChunk[chunk.type](chunk);
    } else {
      result += unimarkChunk['text'](chunk);//UNKNOWN\n';
    }
  }

  return result;
};


Unimark.unimark = unimark;
