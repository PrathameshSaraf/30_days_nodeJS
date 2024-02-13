const {writeFileSync, readFileSync}=require('fs');

const writeToFile=(filePath,content)=>{
    try{
        writeFileSync(filePath,content);
        let data =readFileSync(filePath);
        console.log("data ====>"+data);
        return ;
    }catch(e){
        console.log(`error writting file : ${e}`);
    }
}

writeToFile('day_2/file1.txt', "sample content");

writeToFile('test-files/nonexistent-file.txt',"out");