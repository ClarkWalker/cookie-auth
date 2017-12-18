const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const knex = require('knex');
const pg = require('pg');
// const queries = require('./database/queries.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public'));
app.use(cookieParser());
app.use(cookieSession({
  name: 'g64',
  keys: ['keyboard cat'],

  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

const indexRoute = require('./routes/index.js');
app.use('/', indexRoute.router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
