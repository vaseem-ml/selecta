const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');

require('dotenv').config();
// Set up the express app
const app = express();
const server = http.createServer(app);
var io = require('socket.io')(server);
app.use(cors());
// Log requests to the console.
require('dotenv').config();
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
const models = require('./models');
models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine');
}).catch((err) => {
    console.log('something went wrong with the database update', err);
});

const data = require('./routes/data.routes');




app.use('/api/v1/admin/data', data);





const port = parseInt(process.env.PORT, 10) || 3001;
app.set('port', port);

server.listen(port, function() {
    console.log("app listening on port " + port);
});
module.exports = app;