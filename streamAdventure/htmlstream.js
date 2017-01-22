var trumpet =  require('trumpet'),
	through = require('through2'),
	trump = trumpet(),
	stream;

	stream = trump.select('.loud').createStream();

stream.pipe(through(function(buff,enc,next){
	this.push(buff.toString().toUpperCase());
	next();
})).pipe(stream);

process.stdin.pipe(trump).pipe(process.stdout);