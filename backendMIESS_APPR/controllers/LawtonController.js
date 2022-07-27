const Lawton = require("../models/Lawton");


exports.enviarTest = async (req, res) => {

    try {
        let testLawton;

        testLawton = new Lawton(req.body);

        await testLawton.save();
        res.send(testLawton);



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest = async (req, res) => {

    try {
        const lawton = await Lawton.find();
        res.json(lawton);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}