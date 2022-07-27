const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {

        await mongoose.connect('mongodb+srv://Jachila1:12345@proyectoprogramacionava.v27ea.mongodb.net/ProyectoProgramacionAvanzada', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD Conectada');

    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB