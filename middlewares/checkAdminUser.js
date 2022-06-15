/*
1. Será necessário criar um middleware que verifica se o usuário tem a permissão ADMIN para poder realizar alterações de administrador.
*/
const fs = require('fs')
const path = require('path')


const checkRole = {
    filename: '../database/users.json',

    checkRole: () => {
        let readFile = fs.readFileSync(this.filename, 'utf-8')
        const users = JSON.parse(readFile)
        return users
    }


}

console.log(checkRole.checkRole)

module.exports = checkRole;