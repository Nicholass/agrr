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
var server = serverFactory(express, config, log, bodyParser);
var db = dbfactory(mongoose, fs, path, config, log);
/*
TODO backend: schemas && schemaList; db CRUD; handlers (based on CRUD); append handlers to rotes
- http://mongoosejs.com/docs/guide.html
- http://habrahabr.ru/post/213931/
TODO frontend: think'bout #!routes -> modals-views -> controllers <- react && backbone
*/

server.run(db);