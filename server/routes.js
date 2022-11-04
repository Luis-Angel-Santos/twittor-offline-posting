// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [{

        _id: 'XXX',
        user: 'spiderman',
        mensaje: 'Hola mundo'


    },

];






// Get mensajes
router.get('/', function(req, res) {
    // res.json('Obteniendo mensajes');
    res.json(mensajes);
});



// Post mensajes
router.post('/', function(req, res) {

    const mensaje = {
        mensaje: req.body.mensaje,
        user: req.body.user
    };

    mensajes.push(mensaje);

<<<<<<< HEAD
  console.log(mensajes);
  res.json({
      ok: true,
      mensaje
  });
=======
    console.log(mensajes);
    res.json({
        ok: true,
        mensaje
    });
>>>>>>> 7969e0d4f1a4adb36adf4f537d9d946eeebd3884
});



module.exports = router;