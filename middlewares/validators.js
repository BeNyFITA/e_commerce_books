const path = require('path');
const { check } = require('express-validator')

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


