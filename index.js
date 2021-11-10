const myArgs = process.argv[2];
const rdFile = require('./readFile');
const readd = require('./getFile');

const paths = readd.abP(myArgs);
console.log(rdFile.rdLinks(paths));
