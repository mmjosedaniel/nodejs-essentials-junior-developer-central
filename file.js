const fs = require('fs');

const data = fs.readFileSync('system.js');

fs.writeFileSync('data.txt', "Hello World.");
fs.copyFileSync('data.txt', 'data.bank.txt');
fs.copyFileSync('data.txt', 'data.to.rename.txt');

fs.watchFile('data.txt', () => {
    console.log('data.txt was changed');
});

fs.appendFileSync('data.txt', " This message was added after creating the file!");
fs.appendFileSync('data.bank.txt', ' This is a copy!');
fs.appendFileSync('data.to.rename.txt', ' Renamed!');

fs.renameSync('data.to.rename.txt', 'data.renamed.txt');

const dataTxt = fs.readFileSync('data.txt');
const dataBankTxt = fs.readFileSync('data.bank.txt');
const dataRenamedTxt = fs.readFileSync('data.renamed.txt');

console.log(data.toString());
console.log(dataTxt.toString());
console.log(dataBankTxt.toString());
console.log(dataRenamedTxt.toString());

fs.unlinkSync('data.txt');

const dir = fs.readdirSync(__dirname);
console.log(dir);

// fs.mkdirSync('file-system');

fs.renameSync('data.bank.txt', 'file-system/data.bank.txt');
fs.renameSync('data.renamed.txt', 'file-system/data.renamed.txt');

