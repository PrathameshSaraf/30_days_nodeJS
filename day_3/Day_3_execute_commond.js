const {exec}=require('child_process');

function executeCommand(command){
     
        exec(command,(err,stdout,stderr)=>{
            if(err){
                console.log(` error occcured ${err}`);
                return;
            }
            console.log(`Command stdout: \n${stdout}`);
        });

}
console.log(process.platform);
const lsCommand = process.platform === 'win32' ? 'dir' : 'ls';
executeCommand(lsCommand);
executeCommand('echo "Hello, Node.js!"');

