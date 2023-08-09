const express = require('express');

const app = express();

const path = require('path');

const rastrearRouter = require('./router/rastrearRouter');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rastrearRouter)

module.exports = app;