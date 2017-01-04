//The hackerearth used 4.3.3 version of nodejs where the following code works

function main(input) {
    var inputParts = input.split('\n'),
        matched;
    for(var i=0;i<inputParts.length-1;i++) {
        matched = inputParts[i+1].match(/a|e|i|o|u|A|E|I|O|U/g);
        if(matched){
            process.stdout.write(matched.length+'\n');    
        } else {
            process.stdout.write('0'+'\n');
        }
        
    }
}
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});