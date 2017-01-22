var through =  require('through2'),
	http = require('http'),
	server;

server = http.createServer(function(req,res){
	if(req.method === 'POST') {
		req.pipe(through(function write(buff,encoding,next){
			this.push(buff.toString().toUpperCase());
			next();
		},function end(done){
			done();
		})).pipe(res);
	} else {
		res.end('send me a post request\n');
	}
});

server.listen(process.argv[2]);