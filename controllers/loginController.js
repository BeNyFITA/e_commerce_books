const fs = require('fs');
const session = require('express-session');
const path  = require('path')
const bcrypt = require('bcrypt')
const User = require('../models/User')

/*
O QUE DEVERÁ SER FEITO
1. Nós iremos ler o JSON e dentro do JSON iremos buscar a senha(criptografada)
2. Após pegar essa senha criptografada nós teremos que compará-la com a senha que o usuário enviou pelo req.body.senha.
3. Depois 
*/

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

        res.redirect('/autenticado')
        /* 
        1. Eu preciso desenvolver uma lógica de primeiramente encontrar dentro do array a senha que é equivalente a passada no req body
        2. Depois disso eu preciso redirecionar o usuário para a view autenticado se ele passar por essas etapas.
        3. LEMBRANDO: A senha está criptografada, será necessário desencriptar.*/
         
    },

    
    viewAutenticado: (req, res) => {
        return res.render('autenticado')
    },

}

/* acessar users.json >> mandar um tolken pra session confirmando autenticação ... */
module.exports = autenticacao;