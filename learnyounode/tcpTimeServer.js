var net = require('net'),
	server;
server = net.createServer(function(socket){
	var dateObj = new Date(),
		year = dateObj.getFullYear().toString(),
		month = dateObj.getMonth()+1,
		date = dateObj.getDate(),
		hours = dateObj.getHours(),
		minutes = dateObj.getMinutes();
	if(month >= 1 && month <=9) {
		month = "0"+month;
	}
	if(date >= 1 && date <= 9) {
		date = "0"+date;
	}
	if(hours >= 0 && hours <= 9) {
		hours = "0"+hours;
	}
	if(minutes >= 0 && minutes <= 9) {
		minutes = "0"+minutes;
	}
	socket.write(year+"-"+month+"-"+date+" "+hours+":"+minutes+"\n");
	socket.end();
});

server.listen(process.argv[2]);