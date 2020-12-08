const express = require('express');
const dataRouter = express.Router();

const fs = require("fs");
const multer = require('multer');
const { uploadSocialMedia } = require('../controllers/data.controller');







var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `uploads/temp/`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage });



//const upload = multer({dest: path}).single('file');
dataRouter
  .post('/upload-social-media-file', upload.single("file"), (req, res, next) => {
    try{      
        next();
    }catch(e) {
      console.log(e)
    }
  }, uploadSocialMedia);




module.exports = dataRouter;