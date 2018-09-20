//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routers = require('./routes');

// define the express app
const app = express();

// enhance your app security with helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// express app definition and middleware config
app.use('/micro-posts', routers);

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});
