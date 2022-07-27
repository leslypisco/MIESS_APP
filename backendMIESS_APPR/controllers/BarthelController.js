const Barthel = require("../models/Barthel");
const TestBarthel = require("../models/Barthel");


exports.enviarTest = async (req, res) => {

    try {
        let testBarthel;

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