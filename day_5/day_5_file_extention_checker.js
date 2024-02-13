const path=require('path');

function checkFileExtension(filePath, expectedExtension){
    const actualExtension=path.extname(filePath);
    if(actualExtension===expectedExtension){
        console.log(`File has expected extension: ${expectedExtension}`);
    }else{
        console.log(`File has unexpected extension: ${actualExtension}, Actual:${actualExtension}`);
    }
}


checkFileExtension('file.txt','.txt');
checkFileExtension('file.html','.html');