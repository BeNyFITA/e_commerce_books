const ProdutoRepository = require('../database/produtoRepository');
const { validationResult } = require('express-validator');

const controller = {
    acaoListar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        res.render('products/listagem', {
            contexto: {
                title: 'Produtos',
                menu: 'produtos',
                produtos: produtoRepo.produtos
            }
        })
    },

    acaoAdministrar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        res.render('products/administrar', {
            contexto: {
                title: 'Administrar Produtos',
                menu: 'produtos',
                produtos: produtoRepo.produtos
            }
        });
    },

    acaoDetalhar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        res.render('products/detalhar', {
            contexto: {
                title: 'Administrar Produtos',
                menu: 'produtos',
                produto: produtoRepo.buscarPorId(req.params.id)
            }
        });
    },

    // Formulários

    acaoFormCriar: (req, res) => {
        res.render('products/form-criar', {
            contexto: {
                title: 'Novo Produto',
                menu: 'produtos'
            }
        })
    },

    acaoCriar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            console.log('Nenhum erro');
            produtoRepo.criar(req.body);
            res.redirect('produto/administrar');
        }else {
            console.log('Errors: ', errors.mapped());

            res.render('products/form-criar', {
                contexto: {
                    title: 'Novo Produto',
                    menu: 'produtos',
                    old: req.body,
                    errors: errors.mapped()
                }
            })
        }
    },

    acaoFormAlterar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        res.render('products/form-alterar', {
            contexto: {
                title: 'Alterar Produtos',
                menu: 'produtos',
                produto: produtoRepo.buscarPorId(req.params.id)
            }
        })
    },

    acaoAlterar: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        produtoRepo.alterar(req.body);
        res.redirect('produto/administrar');
    },

    acaoFormExcluir: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        res.render('products/form-excluir', {
            contexto: {
                title: 'Excluir Produto',
                menu: 'Produtos',
                produto: produtoRepo.buscarPorId(req.params.id)
            }
        })
    },

    acaoExcluir: (req, res) => {
        const produtoRepo = new ProdutoRepository();
        produtoRepo.excluir(req.params.id);
        res.redirect('/produto/administrar')
    }
}

module.exports = controller