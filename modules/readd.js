const fs = require("fs");
const path = require("path");
const readFile = require('./readFile');

const abP = (inputPath) => {
  const resolve = path.resolve;
  const absPath = resolve(inputPath);
  console.log(absPath);

  fs.stat(absPath, (err, stats) => {
    if (!err) {
      if (stats.isDirectory()) {
        console.log(`Is directory: ${stats.isDirectory()}`);
        fs.readdir(absPath, "utf8", (err, files) => {
          if (err) {
            throw err;
          } else {
            files.forEach((file) => {
              if (path.extname(file) === ".md" || path.extname(file) === ".markdown") {
                console.log(file);
                readFile.readFile();
              }
            });
          }
        });
      } else if (stats.isFile()) {
        console.log(`Is file ${stats.isFile()}`);
				readFile.readFile();
      }
    } else throw err;
  });
};

exports.abP = abP;

/*  console.log(md('./CDMX011-md-links')); */
//'C:/Users/HP-15/Documents/CDMX011-md-links'
//C:/Users/HP-15/Documents/CDMX011-social-network
