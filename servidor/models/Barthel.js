const mongoose = require('mongoose');

const BarthelSchema = mongoose.Schema({

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


});

/* module.exports = mongoose.model('tecnico', BarthelSchema);
 */
module.exports = model('tecnico', userSchema);