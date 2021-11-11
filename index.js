const myArgs = process.argv[2];
const rdFile = require('./readFile');
const readd = require('./getFile');
const httpRequest = require('./validate');

const paths = readd.getPath(myArgs);
const links = rdFile.rdLinks(paths);
console.log(httpRequest.validate(links));
