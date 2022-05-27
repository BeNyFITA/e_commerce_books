const express = require('express')
const router = express.Router();
const cadastro = require('../controllers/cadastroController')
const {check, validationResult } = require('express-validator')

router.get('/criar', cadastro.registro)
// Abaixo está sendo realizado as validações da rota criar (adicionais de segurança)
const validacoes = [
    check('nome').isEmpty(),
    check('sobrenome').isEmpty(),
    check('email').isEmail(),
    check('cpf').isLength({min: 11, max: 11}),
    check('senha').isStrongPassword(),
    check('data').isDate(),
]

const verificarErros = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(res.status(400))
    }
}

router.post("/criar", validacoes ,cadastro.criarRegistro)
router.get('/cadastroFeito', cadastro.guardarRegistro)

module.exports = router;