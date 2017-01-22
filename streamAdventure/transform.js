var through2 = require('through2'),
    write,end,stream;

write = function write(buffer,encoding,next){
    this.push(buffer.toString().toUpperCase());
    next();
}
end = function end(done){
    done();
}

stream = through2(write,end);

process.stdin.pipe(stream).pipe(process.stdout);