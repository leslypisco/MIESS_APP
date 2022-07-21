'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    _id: {
    type: String,
    required: '_id'
  }
});
module.exports = mongoose.model('ProyectoProgramacionAvanzada', LibroSchema);