const exec = require('child_process').exec;

const start = res => {
  console.log('Request handler "start" was called.');

  exec('ls -lah', (error, stdout) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(stdout);
    res.end();
  });
};

const upload = () => {
  console.log('Request handler "upload" was called.');
};

exports.start = start;
exports.upload = upload;
