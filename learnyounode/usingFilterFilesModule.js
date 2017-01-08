var filterFiles = require('./filterFilesModule.js');

filterFiles(process.argv[2],process.argv[3],function(err,list){
	if(err) {
		return console.log('error occured while reading files ',err);
	} else {
		list.forEach(function(file){
			console.log(file);
		});
	}
});