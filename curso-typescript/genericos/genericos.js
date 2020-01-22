"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Classe com Generics
class OperacaoBinaria {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'dia').executar())
// console.log(new OperacaoBinaria({}, T).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operador1 + this.operador2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
//# sourceMappingURL=genericos.js.map