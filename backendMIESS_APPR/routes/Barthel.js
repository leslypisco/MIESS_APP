// Rutas para producto
const express = require('express');
const router = express.Router();
const barthelController = require('../controllers/BarthelController');

// api/productos
router.post('/', barthelController.enviarTest);
router.get('/', barthelController.obtenerTest);


module.exports = router;