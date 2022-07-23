// Rutas para producto
const express = require('express');
const router = express.Router();
const barthelController = require('../controller/BarthelController');
const user = require('../models/user');
const jwt = require('jsonwebtoken');


// api/productos
/* router.post('/', barthelController.enviarTest); */
const User = require('../models/user');

router.get('/', barthelController.obtenerTest);
router.get('/:tec_cedula', barthelController.obtenerTest_Cedula);
router.post('/signin', async (req, res) => {
    const { tec_cedula, tec_contrasenia } = req.body;

    const user = await User.findOne({tec_cedula});
	
	res.send(user);



    if (!user) return res.status(401).send('El tecnico no existe');
    if (user.tec_contrasenia !== tec_contrasenia) return res.status(401).send('Wrong Password');

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});




async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router;