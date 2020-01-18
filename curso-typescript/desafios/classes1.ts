// Desafio Classe Produto
// Atributo: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passando dois e três params

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0) {
            
    }
}

const ProdutoEsperto1 = new Produto('Panela', 20.99)
ProdutoEsperto1.desconto = 0.7
console.log(ProdutoEsperto1)

const ProdutoEsperto2 = new Produto('Faca', 9.79, 0.3)
console.log(ProdutoEsperto2)
