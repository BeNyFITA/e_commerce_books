const User = require('../models/User');
const bcrypt = require('bcrypt');

const cadastro = {
    registro: (req, res) => {
        res.render('cadastro')
    },
    criarRegistro:(req, res)=>{

        // Criptografia de senha
        let userToCreate = {
            ...req.body,
            senha: bcrypt.hashSync(req.body.senha, 10),
        }

        
        let userCreated = User.create(userToCreate);

        res.redirect('/cadastro/cadastroFeito')
    },
    guardarRegistro:(req,res)=>{
        res.render('cadastroFeito')
        
    }

}

module.exports = cadastro;