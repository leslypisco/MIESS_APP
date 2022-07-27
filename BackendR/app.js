var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var formularioRouter = require('./routes/formulario');

mongoose.connect('mongodb+srv://Jachila1:12345@proyectoprogramacionava.v27ea.mongodb.net/ProyectoProgramacionAvanzada', 
{ 
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/formulario', formularioRouter);

module.exports = app;
