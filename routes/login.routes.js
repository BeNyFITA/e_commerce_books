const express = require('express');
const router = express.Router();
const login = require('../controllers/loginController')
/* const autenticaoLogin = require('autenticacaoLogin') */

// tela de login
router.get('/', login.viewLogin)

module.exports = router;