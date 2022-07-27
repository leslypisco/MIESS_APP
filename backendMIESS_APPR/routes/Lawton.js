// Rutas para producto
const express = require('express');
const router = express.Router();
const lawtonController = require('../controllers/LawtonController');

// api/productos
router.post('/', lawtonController.enviarTest);
router.get('/', lawtonController.obtenerTest);


module.exports = router;