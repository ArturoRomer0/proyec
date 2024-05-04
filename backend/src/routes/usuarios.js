const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios.controller.js');

const router = Router();

router.get('/', getUsuarios);


module.exports = router; 