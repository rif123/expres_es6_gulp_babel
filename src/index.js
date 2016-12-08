/* @flow */
import express 		from 'express';
import bodyParser 	from 'body-parser';
import multer 		from 'multer';
import morgan 		from 'morgan';
import path			from 'path';
import handlebars   from 'express-handlebars';
// require('dotenv').config();
import dotenv   from 'dotenv';
const  app 			= express();
// dotenv.config();
console.log(process.env.NODE_ENV);
// import routes		from '../app/routes';
import config 		from './app/config/env'


const  upload 		= multer();


app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
	
/**
 * set for view config
 */
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.render('home');
});

const server = app.listen(2000, function () {
  console.log('Express listening on port 2000');
});