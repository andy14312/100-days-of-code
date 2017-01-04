var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var testCases;

rl.question("enter test cases\n",function(testCases){
    function inputTree() {
       rl.question("",function(treeString){
            console.log(treeString.match(/a|e|i|o|u|A|E|I|O|U/g).length);
            if(--testCases) {
                inputTree();
            } else {
                rl.close();
            }
            
        }); 
    }
    inputTree();
});


