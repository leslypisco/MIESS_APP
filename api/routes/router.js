'use strict';
module.exports = function (app) {
  var ProyectoProgramacionAvanzada = require('../controller/controller');
// libros Routes
  app.route('/adulto_mayor')
    .get(ProyectoProgramacionAvanzada.ListarTodosLosLibros)
};  