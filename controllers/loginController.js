const fs = require('fs');
const session = require('express-session');
const path  = require('path')
const bcrypt = require('bcrypt')
const User = require('../models/User')


const autenticacao = {

    viewLogin: (req, res) => {
        return res.render('login')
    },

    autenticado: (req, res) => {
        let userToLogin = User.findUserByField('email', req.body.email)

        if(userToLogin){
            let isPasswordVerified = bcrypt.compareSync(req.body.senha, userToLogin.senha)

            if(isPasswordVerified){
                return res.redirect('/usuario')
            }
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'As credenciais informadas estão incorretas'
                }
            }
        })

         
    },

    
    viewAutenticado: (req, res) => {
        return res.render('autenticado')
    },

}

/* acessar users.json >> mandar um tolken pra session confirmando autenticação ... */
module.exports = autenticacao;