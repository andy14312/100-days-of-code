var fs = require('fs');
fs.readFile(process.argv[2],function(error,buffer){
	if(error) {
		return console.log('error occured while reading the file');
	} else {
		console.log(buffer.toString().split('\n').length-1);
	}
});