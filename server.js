var express = require('express'),   
app = express(),   
port = process.env.PORT || 3000,   
mongoose = require('mongoose'),   
ProyectoProgramacionAvanzada = require('./api/models/model'), 
//created model loading here
bodyParser = require('body-parser');    
// mongoose instance connection url connection 
mongoose.Promise = global.Promise; mongoose.connect('mongodb+srv://Jachila1:*****@proyectoprogramacionava.v27ea.mongodb.net/ProyectoProgramacionAvanzada');   
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());   

var routes = require('./api/routes/router'); 

routes(app); 

app.listen(port);   
console.log('Servidor para RESTful API de Libros iniciada en puerto 3000: ' + port);