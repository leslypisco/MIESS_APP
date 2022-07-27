var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Formulario = require('../models/Formulario.js');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../backendMIESS_APP/public/images');
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

router.get('/:id', function(req, res, next) {
  Formulario.findById(req.params.id, function (err, formulario) {
      if (err) return next(err);
      res.json(formulario);
  });
});


router.post('/', upload.single('file'), function(req, res, next) {
  if(!req.file) {
      return res.status(500).send({ message: 'Upload fail'});
  } else {
      req.body.imageUrl = 'http://54.210.156.121:3000/images/' + req.file.filename;
      Formulario.create(req.body, function (err, formulario) {
          if (err) {
              console.log(err);
              return next(err);
          }
          res.json(formulario);
      });
  }
});



module.exports = router;
