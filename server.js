const http = require('http');
const url = require('url');

exports.start = (route, handle) => {
  http.createServer((req, res) => {
    let postData = '';
    const pathName = url.parse(req.url).pathname;
    console.log(`Request for ${pathName} received.`);

    req.setEncoding('utf8');

    req.addListener('data', postDataChunk => {
      postData += postDataChunk;
      console.log('Received POST data chunk "' + postDataChunk + '".');
    });

    req.addListener('end', () => route(handle, pathName, res, postData));

  }).listen(8888);
  
  console.log('Server has started.');
};
