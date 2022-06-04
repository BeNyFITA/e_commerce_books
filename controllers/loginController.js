const fs = require('fs');
const session = require('express-session');
const path  = require('path')
const bcrypt = require('bcrypt')

/*
O QUE DEVERÁ SER FEITO
1. Nós iremos ler o JSON e dentro do JSON iremos buscar a senha(criptografada)
2. Após pegar essa senha criptografada nós teremos que compará-la com a senha que o usuário enviou pelo req.body.senha.
3. Depois 
*/

const autenticacao = {

    filename: "./database/users.json",

    // 1.Aqui estamos lendo o JSON
    readJson: function() {
        let filename = this.filename
        let usersJsonString = fs.readFileSync(filename, 'utf-8')
        let usersJson = JSON.parse(usersJsonString)

        // entrar dentro do array de objetos buscar uma propriedade e retornar o valor dela
        let senha = usersJson.map(object => object.senha)
        return senha;
    },
   
    // 2. Aqui será feita a comparação entre as senhas
    comparePassword: () => {
        let usersJsonPassword = this.readJson;
        console.log(usersJsonPassword)

        // let passwordFromBody = req.body.senha;
        // let passwordEncrypted = bcrypt.compareSync('objeto com a senha', passwordFromBody)
        // if(!passwordEncrypted){
        //     res.send('Senha incorreta')
        // }else {
        //     res.send('Você está autenticado.')
        // }

    }

}

console.log(autenticacao.comparePassword())




const login = {
    viewLogin: (req, res) => {res.render('login')}
}




/* acessar users.json >> mandar um tolken pra session confirmando autenticação ... */



module.exports = login;