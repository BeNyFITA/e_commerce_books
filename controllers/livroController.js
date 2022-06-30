const db = require('../models/');
listar = async (req, res) => {
  //Buscar todos os livros do banco
  try {
    const lista = await db.Livro.findAll();
    res.status(200).json(lista);
  } catch (err) {
    console.error('Erro ao tentar executar consulta:', { err });
    res.status(500).json({ error: 'Houve um erro ao acessar os livros' });
  }

  // db.Livro.findAll().then((lista) => {
  //   res.status(200).send(lista);
  // })
  // .catch(err =>{
  //   res.status(500).send('Houve um erro ao acessar os livros')
  // });
};

module.exports = { listar /*, criar, excluir, atualizar*/ };
