const express = require('express')
const router = express.Router();
const cadastro = require('../controllers/cadastroController')

router.get('', cadastro.registro)

module.exports = router;