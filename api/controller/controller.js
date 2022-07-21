'use strict';
var mongoose = require('mongoose'),
ProyectoProgramacionAvanzada = mongoose.model('ProyectoProgramacionAvanzada');
exports.ListarTodosLosadulto_mayor = function (req, res) {
    ProyectoProgramacionAvanzada.find({}, function (err, ProyectoProgramacionAvanzada) {
    if (err)
      res.send(err);
    res.json(ProyectoProgramacionAvanzada);
  });
};
