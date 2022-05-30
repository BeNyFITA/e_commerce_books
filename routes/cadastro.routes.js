const express = require('express')
const router = express.Router();
const cadastro = require('../controllers/cadastroController')
const {check, validationResult } = require('express-validator')

// Abaixo está sendo realizado as validações da rota criar (adicionais de segurança)


router.get('/criar', validacoes ,cadastro.registro)
router.post("/criar", validacoes ,cadastro.criarRegistro)
router.get('/cadastroFeito', cadastro.guardarRegistro)

module.exports = router;