const cadastro = {
    registro: (req, res) => {
        res.render('cadastro')
    },
    criarRegistro:(req, res)=>{
        console.log(req.body);
        res.redirect('/cadastro/cadastroFeito')
    },
    guardarRegistro:(req,res)=>{
        res.render('cadastroFeito')
        
    }

}

module.exports = cadastro;