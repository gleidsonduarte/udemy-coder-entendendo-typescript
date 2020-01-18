"use strict";
// Desafio Classe Produto
// Atributo: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const ProdutoEsperto1 = new Produto('Panela', 20.99);
ProdutoEsperto1.desconto = 0.7;
console.log(ProdutoEsperto1);
const ProdutoEsperto2 = new Produto('Faca', 9.79, 0.3);
console.log(ProdutoEsperto2);
//# sourceMappingURL=classes1.js.map