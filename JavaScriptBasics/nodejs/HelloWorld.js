var http = require('http');

http.createServer(function (req, res) {
  function sayHello() {

  console.log('I say Hello World');

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'});
        
    res.end('hello world\n');
    
   }
   
   console.log('Request for greeting');
   setTimeout(sayHello, 5000);
   
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

