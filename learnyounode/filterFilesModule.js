var fs = require('fs'),
	path = require('path');
module.exports = function(dir,ext,cb) {
	fs.readdir(dir,function(err,list){
		if(err) {
			return cb(err);
		} else {
			cb(null,list.filter(function(file){
				if(path.extname(file) === '.'+ext) {
					return true;
				}
			}));
		}
	});
}