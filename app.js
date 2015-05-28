// libs
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

// load server and db function factories
const serverFactory = require('./server');
const dbfactory = require('./app/db');

// load utilities
const config = require('./config');
const log = require('./app/log');

// Init all the stuff
var router = express.Router();
var app = express();

var server = serverFactory(app, config, log, bodyParser);
var db = dbfactory(mongoose, fs, path, config, log);
/*
TODO backend: finish routers; append router to app;
- http://mongoosejs.com/docs/guide.html
- http://habrahabr.ru/post/213931/
- http://www.sitepoint.com/creating-restful-apis-express-4/
TODO frontend: think'bout #!routes -> modals-views -> controllers <- react && backbone
*/

server.run(db);