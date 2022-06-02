const fs = require('fs');
const session = require('express-session');
const path  = require('path')

/* let usersJson = path.join(__dirname, "../database/users.json")
let usersParse = JSON.parse(fs.readFileSync(usersJson, 'utf-8'))
    console.log(usersParse) */

    function teste () {
        let usersJson = path.join(__dirname, "../database/users.json")
        let usersParse = JSON.parse(fs.readFileSync(usersJson, 'utf-8'))
        return usersParse
    }


module.exports = console.log('listanto users',teste())