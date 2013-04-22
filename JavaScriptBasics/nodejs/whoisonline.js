var http = require('http');

var person = { name : "" } 
var people = [];
var game = { gamers : [], name : "", data : {} }
var games = [];

http.createServer(function (req, res) {
  function sayHello() {

  console.log('I say Hello World');

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'null'});
        
    res.end('hello world\n');
    
   }
   
   console.log('Request for greeting');
   setTimeout(sayHello, 5000);
   
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

