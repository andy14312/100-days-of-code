var through = require('through2'),
	split = require('split'),
	write,end,stream,lineCount=0;

write = function write(line,encoding,next) {
	lineCount++;
	if(lineCount%2===0){
		this.push(line.toString().toUpperCase()+'\n');
	} else {
		this.push(line.toString().toLowerCase()+'\n');
	}
	next();
}

end = function end(done) {
	done();
}

stream = through(write,end);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);