const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api/livros/', apiController.listar);
router.get('/api/livros/:id', apiController.detalhar);
router.post('/api/livros/', apiController.criar);
router.delete('/api/livros/:id', apiController.excluir);
router.put('/api/livros/:id', apiController.alterar);
// router.patch('/livros/', livroController.atualizar); // Atualiza um determinado campo do objeto

module.exports = router;
