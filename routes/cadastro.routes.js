const express = require('express');
const { validationResult } = require('express-validator');

const cadastro = require('../controllers/cadastroController')
const validacoes = require('../middlewares/validators')

const Swal = require('sweetalert2')

const router = express.Router();

// Abaixo está sendo realizado as validações da rota criar (adicionais de segurança)
router.get('/criar' ,cadastro.registro)
router.post('/criar', validacoes , (req, res, next) => {
    let errors = validationResult(req);
    
    // TOFIX: Quando o usuário coloca todas as informações corretas não acontece nenhum erro, porém se ele colocar há um bug
    if(!errors.isEmpty(errors)){
        res.render('cadastro', {
            contexto: {
              title: 'Novo Produto',
              menu: 'produtos',
              old: req.body,
              errors: errors.mapped()
            }
        })
    }else {
        cadastro.criarRegistro(req, res)
    }


    
    next()
})

module.exports = router;