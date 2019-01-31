const fs = require('fs');
const path = require('path');






function readDir(filePath) {
  const target = fs.readdirSync(filePath);
  target.forEach((file) => {
    const stat = fs.lstatSync(path.join(filePath, file));
    // 是文件夹
    if(stat.isDirectory()) {
      readDir(path.join(filePath, file));
    } else {
      console.log('文件', path.join(filePath, file))
    }
  })
}

readDir('./generators/app/templates/react-ts');


