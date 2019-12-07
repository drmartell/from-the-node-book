const http = require('http');
const url = require('url');

exports.start = (route, handle) => {
  http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    console.log(`Request for ${pathName} received.`);

    route(handle, pathName, res);
  }).listen(8888);
  
  console.log('Server has started.');
};
