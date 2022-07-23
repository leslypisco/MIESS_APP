// Rutas para producto
const express = require('express');
const router = express.Router();
const barthelController = require('../controller/BarthelController');

// api/productos
/* router.post('/', barthelController.enviarTest); */


router.get('/', barthelController.obtenerTest);
router.get('/:tec_cedula', barthelController.obtenerTest_Cedula);



module.exports = router;