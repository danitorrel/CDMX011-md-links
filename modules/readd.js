const fs = require('fs');
const path = require('path');

/* fs.readFile('C:/Users/HP-15/Documents/CDMX011-md-links/README.md', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
}) */

const readDir = () => {
	fs.readdir('C:/Users/HP-15/Documents/CDMX011-md-links', (err, files) => {
		if (err) {
			throw err
		} else {
			files.forEach((file) => {
				if (path.extname(file) === '.md'){
				console.log(file);
				}
			});
		}
	});
}