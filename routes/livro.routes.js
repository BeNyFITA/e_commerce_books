const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/livro/', livroController.listar);
// router.get('/livro/:id', livroController.detalhar);
// router.post('/livro/', livroController.criar);
// router.put('/livro/', livroController.alterar); // Alterar tudo
// router.patch('/livro/', livroController.atualizar); // Atualiza um determinado campo do objeto
// router.delete('/livro/:id', livroController.excluir);

module.exports = router;
