const fs = require("fs");
const path = require("path");

const abP = (inputPath, arrFiles = []) => {
  const absPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);

	if (fs.statSync(absPath).isDirectory()) {
		const files = fs.readdirSync(absPath);
  	files.forEach((file) => {
			const dirFile = path.join(absPath, file);
			abP(dirFile, arrFiles);
		});
	}else if(path.extname(absPath) === ".md" || path.extname(absPath) === ".markdown"){
		arrFiles.push(absPath);
	}
  return arrFiles;
};

exports.abP = abP;

/*  console.log(md('./CDMX011-md-links')); */
//'C:/Users/HP-15/Documents/CDMX011-md-links'
//C:/Users/HP-15/Documents/CDMX011-social-network
