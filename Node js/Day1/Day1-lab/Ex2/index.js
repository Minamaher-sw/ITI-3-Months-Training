// p1
const fs = require('fs');
const content =" ";
fs.writeFileSync('./data.txt', 'Mina Maher');

var retData =fs.readFileSync("./data.txt","utf8");

retData += " " + "I am Engineer"
fs.writeFileSync('./data.txt', retData);
retData =fs.readFileSync("./data.txt","utf8"); 
console.log(retData);

//asunc
fs.unlink('./data.txt', (err) => {
    if (err) {
    console.error('Error deleting file:', err);
    return;
    }
    console.log('File deleted successfully.');
});

//p2
const path =require("path");
const filePath ="./index.js";
const absolutePath =path.resolve(filePath);

const fileName = path.basename(filePath);
const extName = path.extname(filePath);

console.log("absolute path is",absolutePath);
console.log("fileName is ",fileName);
console.log("extName is ",extName);

//p3
const os =require("os");

var totalmem = os.totalmem() /Math.pow(1024,3);
var freemem = os.freemem() /Math.pow(1024,3);
console.log("Host Name is " ,os.hostname()) ;
console.log('Total Memory   :', totalmem, 'GB');
console.log("free mem is " ,freemem,"GB") ;
console.log("Os type is " ,os.type()) ;