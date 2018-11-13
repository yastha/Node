const http = require('http');
http.createServer((request, response) => {
response.writeHead(200,{

});
response.write("Hello World!\n");
response.end();
}).listen(1337);
