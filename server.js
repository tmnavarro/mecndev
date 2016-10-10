'use strict';

let http = require('http');

let server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1 style="width: 100%; text-align: center;">Mec&Dev Hello World! </h1>');
});

const PORT = Number(process.env.PORT || 9000);

server.listen(PORT);

