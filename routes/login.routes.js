const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const autenticacao = require('../controllers/loginController')
/* const autenticaoLogin = require('autenticacaoLogin') */

// tela de login
router.get('/login', autenticacao.viewLogin)
// criar a rota post
router.post('/login', autenticacao.autenticado)

// tela de perfil
router.get('', autenticacao.profile)

module.exports = router;