const express = require('express');
const loginRouter = express.Router();

const { validateLogin } = require('../controllers/login.controller');

//const upload = multer({dest: path}).single('file');
loginRouter
  .post('/loginVal', validateLogin);




module.exports = loginRouter;