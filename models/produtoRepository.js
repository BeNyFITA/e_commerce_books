const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

class ProdutoRepository {
    constructor() {
        this.caminhoCompletoArquivo = path.join(__dirname, '../database/produtos.json');
        const arquivo = fs.readFileSync(this.caminhoCompletoArquivo, 'utf-8');
        this.produtos = JSON.parse(arquivo);
    }

    buscarPorId(x) {
        return this.produtos.find((a) => a.id === x);
    }

    promocoes() {
        return this.produtos.filter((a) => a.isPromocao === true);
    }

    criar(novoProduto) {
        novoProduto.id = uuid.v4() // criando o id do produto
        this.produtos.push(novoProduto)
        fs.writeFileSync(
            this.caminhoCompletoArquivo,
            JSON.stringify(this.produtos, null, ' ')
        );
    }

    excluir(id) {
        const novaLista = this.produtos.filter((produto) => produto.id !== id)
        fs.writeFileSync(
            this.caminhoCompletoArquivo,
            JSON.stringify(novaLista, null, ' ')
        );
    }

    atualizar(produtoAlterado) {
        const novaLista = this.lista.filter((produto) => produto.id !== novoProduto.id);
        this.lista.push(produtoAlterado);
        fs.writeFileSync(
            this.caminhoCompletoArquivo,
            JSON.stringify(novaLista, null, ' ')
        )

    }
}

module.exports = ProdutoRepository;