const path=require('path');

// console.log(path.sep)// ye / dega

// const filePath=path.join('/content','subfolder','test.txt');
// console.log(filePath);

// const base=path.basename(filePath);
// console.log(base);

const absolute1=path.resolve('content','subfolder','test.txt');
const absolute2 = path.resolve(__dirname,"content", "subfolder", "test.txt");

//same result
console.log(absolute1,absolute2);