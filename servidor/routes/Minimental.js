// Rutas para producto
const express = require('express');
const router = express.Router();
const minimentalController = require('../controller/MiniMentalController');

// api/productos
router.post('/', minimentalController.enviarTest);
router.get('/', minimentalController.obtenerTest);


module.exports = router;