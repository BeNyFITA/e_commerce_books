const express = require('express')
const router = express.Router();
const usuario = require('../controllers/usuarioController')

router.get('', usuario.user);

module.exports = router;