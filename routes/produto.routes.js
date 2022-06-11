const express = require ('express');
const controller = require('../controllers/produtoController');
const productValidator = require('../middlewares/productValidator');

const router = express.Router();

// Rotas de CRUD
router.post(
    '/',
    productValidator,
    controller.acaoCriar
);
router.put('/:id', controller.acaoAlterar);
router.delete('/:id', controller.acaoExcluir);

// Rotas para formulários e páginas
router.get('/', controller.acaoListar);
router.get('/administrar', controller.acaoAdministrar);
router.get(
    '/criar',
    productValidator,
    controller.acaoFormCriar
)
router.get('/detalhar/:id', controller.acaoDetalhar);
router.get('/alterar/:id', controller.acaoFormAlterar);
router.get('/excluir/:id', controller.acaoFormExcluir);

module.exports = router;
