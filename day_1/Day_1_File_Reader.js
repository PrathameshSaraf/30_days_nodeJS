const fs = require('fs').promises;

async function readFileContent(filePath){
    try{
        const content=await fs.readFile(filePath,'utf-8');
        if(content){
            console.log(`\n File Content is : `+content);
        }else{
            console.log(`\n(empty file)`);
        }
    }catch(e){
        console.error(`\n Error reading file :${e.message}`);
    }
}


readFileContent('day_1/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('day_1/emptyfile.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');