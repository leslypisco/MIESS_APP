const Barthel = require("../models/Barthel");
const TestBarthel = require("../models/Barthel");
const Barthel2 = require("../models/Barthel");


exports.enviarTest = async (req, res) => {

    try {
        let z;

        // Creamos nuestro TestBarthel
        testBarthel = new TestBarthel(req.body);

        await testBarthel.save();
        res.send(testBarthel);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest = async (req, res) => {

    try {
        const barthel = await Barthel.find();
        res.json(barthel);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest_Cedula = async (req, res) => {

    try {
        const barthel2= await Barthel2.findOne();
        res.json(barthel2);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}