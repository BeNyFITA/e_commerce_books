const express = require('express')
const router = express.Router();
const cadastro = require('../controllers/cadastroController')

router.get('/criar', cadastro.registro)
router.post("/criar", cadastro.criarRegistro)
router.get('/cadastroFeito', cadastro.guardarRegistro)

module.exports = router;