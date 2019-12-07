const http = require('http');

exports.start = () => {
  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }).listen(8888);
  console.log("Server has started.");
};
