const { check } = require('express-validator');

/// query, body, cookies, session
const productValidator = [
  check('nome', 'Informe o nome!').isString().notEmpty(),

  check('descricao')
    .notEmpty()
    .withMessage('Informe uma descrição!')
    .bail()
    .isLength({ min: 10 })
    .withMessage('A descrição deve conter ao menos 10 caracteres'),

  check('valor').isNumeric().withMessage('Informe um valor monetário!')
];

module.exports = productValidator;
