const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

class ProdutoRepository {
    constructor() { // Classe construtora
        this.caminhoCompletoArquivo = path.join(__dirname, '../database/produtos.json'); // Caminho do arquivo
        const arquivo = fs.readFileSync(this.caminhoCompletoArquivo, 'utf-8'); // Lendo o caminho
        this.produtos = JSON.parse(arquivo); // Convertendo em objeto JAVASCRIPT
    }

    buscarPorId(x) {
        return this.produtos.find((a) => a.id === x); // Buscando dentro do objeto os IDs e retornando o valor estritamente igual
    }

    promocoes() {
        return this.produtos.filter((a) => a.isPromocao === true); // Verificando se é promocao
    }

    criar(novoProduto) {
        novoProduto.id = uuid.v4() // criando o id do produto
        this.produtos.push(novoProduto) // Adicionando um produto dentro do array de objetos
        fs.writeFileSync( // Convertendo em objeto JSON para enviar para dentro dele
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