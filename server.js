const http = require('http');
const url = require('url');

exports.start = (route) => {
  http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    console.log(`Request for ${pathName} received.`);

    route(pathName);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();

  }).listen(8888);
  
  console.log('Server has started.');
};
