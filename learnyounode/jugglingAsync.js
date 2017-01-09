// var http = require('http'),
// 	helperFunction,
// 	count = 2;
// helperFunction = function helperFunction(url){
// 	if(url) {
// 		http.get(url,function(response){
// 			var data = '';
// 			response.setEncoding('utf8');
// 			response.on('data',function(chunk){
// 				data += chunk; 
// 			});
// 			response.on('end',function(){
// 				console.log(data);
// 				helperFunction(process.argv[count++]);
// 			});
// 		});
// 	} else {
// 		return;
// 	}
	
// }
// if(process.argv[count]){
// 	helperFunction(process.argv[count++]);
// } else {
// 	console.error('no url recieved as argument');
// }


//above code also works perfect. It's just another method of handling multiple http requests asynchronously
var http = require('http'),
	bl = require('bl'),
	count = 0,
	results = [];

var httpGet = function httpGet(index) {
	http.get(process.argv[index+2],function(response){
		response.pipe(bl(function(error,data){
			if(error) {
				return console.error(error);
			} else {
				results[index] = data.toString();
				console.log('index value',index);
				count++;
				if(count === 3) {

					printResults();
				}
			}
		}));
	});
}

var printResults = function printResults() {
	for(var i=0;i<results.length;i++) {
		console.log('i value',i);
	}
}

for(var i=0;i<3;i++) {
	httpGet(i);
}

