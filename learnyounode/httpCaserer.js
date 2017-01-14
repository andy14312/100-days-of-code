var http = require('http'),
	map = require('through2-map'),
	server;

server = http.createServer(function(req,res){
	if(req.method !== 'POST') {
		return res.end('Send me a post\n');
	}
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res)
});

server.listen(process.argv[2]);