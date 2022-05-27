const express = require('express');
const app = express();
const home = require(__dirname + '\\routes\\index')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + 'public'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

app.use('/', home);
