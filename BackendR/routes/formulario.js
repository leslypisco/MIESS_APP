var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Formulario = require('../models/Formulario.js');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../Backend/public/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});

router.post('/', upload.single('file'), function(req, res, next) {
  if(!req.file) {
      return res.status(500).send({ message: 'Upload fail'});
  } else {
      req.body.imageUrl = 'http://localhost:4000/images/' + req.file.filename;
      Formulario.create(req.body, function (err, formulario) {
          if (err) {
              console.log(err);
              return next(err);
          }
          res.json(formulario);
      });
  }
});

router.post('/ubicacion', async (req, res) => {
  try {
      let ubicacion;

      // Creamos nuestro producto
      ubicacion = new Formulario(req.body);
      a = await ubicacion.save();
      res.send(a);
      
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }
});


router.put('/:id', upload.single('file'),  async(req, res) => {
  try{
    const { imageUrl, pregunta1, pregunta2, ubicacion } = req.body;
    let formulario = await Formulario.findById(req.params.id);

    if(!formulario) {
      res.status(404).json({ msg: 'No existe el producto' })
    } 
      req.body.imageUrl = 'http://localhost:4000/images/' + req.file.filename;
      formulario.imageUrl = req.body.imageUrl;
      formulario.pregunta1 = pregunta1;
      formulario.pregunta2 = pregunta2;
      formulario.ubicacion = ubicacion;

      formulario = await Formulario.findOneAndUpdate({ _id: req.params.id },formulario, { new: true} )
      res.json(formulario);

  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
});

router.get('/obtener-id', async (req, res) => {

  try {
      const formulario = await Formulario.find().sort({'_id':-1}).limit(1);
      res.json(formulario)
      
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }

});
module.exports = router;
