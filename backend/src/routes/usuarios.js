const { Router } = require('express');
const { getUsuarios, obtInfoHor,cambioHorario,reservarCita,obtenerCitas,eliminarCita, obtenerHistorialCitas, actualizarDatos, obtenerDatosUsuario} = require('../controllers/usuarios.controller.js');

const router = Router();

router.get('/usuarios', getUsuarios);
router.get('/obtInfo', obtInfoHor)
router.post('/guarCambio', cambioHorario)
router.post('/reservarCita', reservarCita);
router.get('/citas', obtenerCitas);
router.delete('/citas/:index',eliminarCita);
router.get('/historial', obtenerHistorialCitas);
router.get('/usuarioinfo', obtenerDatosUsuario);
router.post('/usuarioguar', actualizarDatos);




module.exports = router; 