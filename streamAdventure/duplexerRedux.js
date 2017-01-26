var duplexer = require('duplexer2'),
    through = require('through2').obj,
    write,end,input;

module.exports = function(counter) {
    var counts = {};
    write = function write(row,encoder,next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    end = function end(done) {
        counter.setCounts(counts);
        done();
    }
    input = through(write,end);
    return duplexer({'objectMode': true},input,counter);
}

