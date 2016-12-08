/* @flow */
import express 		from 'express';
import bodyParser 	from 'body-parser';
import multer 		from 'multer';
import morgan 		from 'morgan';
import path			from 'path';
import handlebars   from 'express-handlebars';
import cookieParser from 'cookie-parser';
import compress 	from 'compression';
import httpStatus 	from 'http-status';
import routes 		from './app/routes';
// import routes		from '../app/routes';
// require('dotenv').config();
// dotenv.config();
import dotenv   from 'dotenv';
const  app 			= express();
import config 		from './app/config/env';
const  upload 		= multer();
const debug = require('debug')('express-mongoose-es6-rest-api:index');
app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());	

/**
 * set for view config
 */
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// mount all routes path
app.use(routes);


const server = app.listen(config.default.port, function () {
	console.log(`server started on port ${config.default.port} (${config.default.env})`);
});