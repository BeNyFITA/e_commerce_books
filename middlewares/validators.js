const { check } = require('express-validator')

const validacoes = [
    check('nome')
    .notEmpty()
    .isString()
    .withMessage('É necessário preencher o nome'),

    check('sobrenome')
    .notEmpty()
    .withMessage('É necessário preencher o sobrenome'),

    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('É necessário preencher o email'),

    check('cpf')
    .notEmpty()
    .withMessage('o campo CPF não pode estar vazio')
    .isLength({min: 11, max: 11})
    .withMessage('É necessário preencher o campo de CPF'),

    check('senha')
    .notEmpty().withMessage('A sua senha não pode estar vazia')
    .isLength({min: 6}),

    check('data')
    .isDate(),
]

module.exports = validacoes