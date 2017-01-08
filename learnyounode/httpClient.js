var http =  require('https'),
	url = process.argv[2];

http.get(url,function(response){
	response.setEncoding('utf8');
	response.on('data',function(data){
		console.log(data);
	});
	response.on('error',function(error){
		return console.log(error);
	});
}).on('error',console.error);