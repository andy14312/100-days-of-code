var http = require('http'),
	url = require('url'),
	server;

server = http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true),
		date = new Date(urlObj.query.iso),
		resObj = {};
	if(urlObj.pathname === '/api/parsetime'){
		resObj.hour = date.getHours();
		resObj.minute = date.getMinutes();
		resObj.second = date.getSeconds();
	}
	if(urlObj.pathname === '/api/unixtime') {
		resObj.unixtime = date.getTime();
	}
	if(Object.keys(resObj).length === 0 && resObj.constructor === Object) {
		res.writeHead(404);
		res.end();
	}
	res.writeHead(200,{'content-type':'application/json'});
	res.end(JSON.stringify(resObj));
});

server.listen(process.argv[2]);