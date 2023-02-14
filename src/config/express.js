const express = require('express');
const router = require('../routes');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

const corsOptions = {
    origin: true,
    credentials: true,
    ///..other options
  };

app.use(express.json({}))
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'))
app.use('/api/v1', router)



module.exports = app;