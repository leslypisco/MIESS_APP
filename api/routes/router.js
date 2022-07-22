'use strict';
module.exports = function (app) {
  var ProyectoProgramacionAvanzada = require('../controller/controller');
// libros Routes
  app.route('/adultos')
    .get(ProyectoProgramacionAvanzada.ListarTodosLosadulto_mayor)
};  