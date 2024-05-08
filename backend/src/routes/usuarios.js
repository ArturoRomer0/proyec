const { Router } = require('express');
const { getUsuariosInfo } = require('../controllers/usuarios.controller.js');

const router = Router();

router.get('/usuarios', getUsuariosInfo);


module.exports = router; 