const path=require('path');


function resolvePath(relativePath) {
  let absolutePath = path.resolve(__dirname, relativePath);
  console.log(`Resolved path :${absolutePath}`);
}

resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');