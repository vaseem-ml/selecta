const fs = require("fs");
const unzipper = require('unzipper');


module.exports = {
  uploadSocialMedia: async( req, res ) => {
    fs.createReadStream('uploads/temp/'+req.file.filename)
        .pipe(unzipper.Extract({ path: 'uploads/temp/' })); 
  }
}