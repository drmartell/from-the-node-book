exports.route = function route(handle, pathName, res, postData) {
  
  console.log('About to route a request for ' + pathName);

  if(typeof handle[pathName] === 'function')
    handle[pathName](res, postData);
  else {
    console.log('No request handler found for ' + pathName);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
  }
};
