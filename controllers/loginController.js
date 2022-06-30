const fs = require('fs');
const session = require('express-session');
const path  = require('path')
const bcrypt = require('bcrypt')
const User = require('../database/User')
const { validationResult } = require('express-validator')


const autenticacao = {

    viewLogin: (req, res) => {
        return res.render('login')
    },

    autenticado: (req, res) => {
        let userToLogin = User.findUserByField('email', req.body.email)

        if(userToLogin){
            let isPasswordVerified = bcrypt.compareSync(req.body.senha, userToLogin.senha)

            if(isPasswordVerified){
                delete userToLogin.senha;
                req.session.userLogged = userToLogin;
                
                return res.redirect('/perfil')
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

    profile: (req, res) => {
        if(req.session.userLogged){
            return res.render('usuario', {
                userLogged: req.session.userLogged
            })
        }else {
            return res.redirect('/user/login')
        }
    }

}

/* acessar users.json >> mandar um tolken pra session confirmando autenticação ... */
module.exports = autenticacao;