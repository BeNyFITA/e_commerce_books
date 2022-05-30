const path = require('path');
const { check } = require('express-validator')

module.exports = [
    check('nome')
    .notEmpty()
    .withMessage('É necessário escrever um nome')
    .bail()
    .trim(),
]