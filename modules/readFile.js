const fs = require("fs");

const readFile = () => fs.readFile('C:/Users/HP-15/Documents/CDMX011-md-links/README.md', 'utf-8', (err, data) => {
	if(err){
		console.log(err)
	}
	console.log(data)
})

exports.readFile = readFile;

/* if( !err ){
       if(stats.isFile()){
           console.log('is file ? ' + stats.isFile());
       }

       else if(stats.isDirectory()){
           console.log('is directory? ' + stats.isDirectory());
       }
   }
   else
      throw err; */
