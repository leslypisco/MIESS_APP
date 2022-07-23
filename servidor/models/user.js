const mongoose = require('mongoose');

const userSchema = mongoose.Schema({


    _id: { type: String, required: true },
    tec_id: { type: String, required: true },
    sup_id: { type: String, required: true },
    tec_nombre: { type: String, required: true },
    tec_apellido: { type: String, required: true },
    tec_cedula: { type: String, required: true },
    tec_telefono: { type: String, required: true },
    tec_correo: { type: String, required: true },
    tec_direccion: { type: String, required: true },
    tec_contrasenia: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('tecnico', userSchema);