"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
}
const mueCliente = new Cliente();
mueCliente.nome = 'Han';
saudarComOla(mueCliente);
mueCliente.saudar('Solo');
console.log(mueCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    let total = 1;
    for (let i = 1; i <= exp; i++) {
        total *= base;
    }
    return total;
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
console.log(Array(10).fill(3).reduce((t, a) => t * a));
//# sourceMappingURL=interfaces.js.map