const db = require('../models');

// Listar todos os livros do banco de dados
listar = async (req, res) => {
  try {
    const lista = await db.Livro.findAll();
    res.status(200).json(lista);
  }catch (err) {
    res.status(500).json({ error: 'Houve um erro ao acessar os livros' });
  }
};



// Detalhar um livro específico do banco de dados
detalhar = async (req, res) => {
  try {
    const {id} = req.params;
    const livro = await db.Livro.findByPk(id);
    res.status(200).json(livro)
  }
  catch (err) {
    res.status(500).json({ error: 'Houve um erro ao detalhar o livro' });
  }
}



// Criar um livro no banco de dados
criar = async (req, res) => {
  try {
    const createBook = await db.Livro.create(req.body) 
    res.status(201).json(createBook)
  }catch (err) {
    res.status(500).json({error: 'Houve um erro ao criar o livro'})
  }
}



// Excluir um livro do banco de dados
excluir = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteBook = await db.Livro.destroy({
      where: {id}
    })
    res.json(deleteBook)
  }
  catch(err) {
    res.status(500).json({error: 'Houve um erro ao excluir o livro'});
  }
}



// Alterar todos os campos de um livro
alterar = async (req, res) => {
  const {id} = req.params;
  try {
    const alterBook = await db.Livro.update(req.body ,{
      where: {id}
    })
    res.json(alterBook)
  }
  catch (err) {
    res.status(500).json({error: `Houve um erro ao alterar o livro`})
  }
}


// Atualizar título
atualizar = async (req, res) => {
  const {id} = req.params;
  const {titulo} = req.body;

  try {
    const titleAlterBook = await db.Livro.update({titulo}, {
      where: {id}
    })
    res.status(201).json(titleAlterBook)
  }
  catch (err) {
    res.status(500).json({error: `Houve um erro ao tentar atualizar o campo específico`})
  }
}

module.exports = { listar, detalhar, criar, excluir, alterar, atualizar };
