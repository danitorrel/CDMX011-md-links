const fs = require("fs");
const path = require("path");

const getPath = (inputPath, arrFiles = []) => {
  const absPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);

	if (fs.statSync(absPath).isDirectory()) {
		const files = fs.readdirSync(absPath);
  	files.forEach((file) => {
			const dirFile = path.join(absPath, file);
			 getPath(dirFile, arrFiles);
		});
	}else if(path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown'){
		arrFiles.push(absPath);
	}
  return arrFiles;
};

exports.getPath = getPath;
