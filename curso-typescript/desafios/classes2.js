"use strict";
// Resolução exercício 1
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidadeMoto = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidadeMoto = this.velocidadeMoto + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidadeMoto);
moto.acelerar(30);
console.log(moto.velocidadeMoto);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 10;
console.log(retangulo.area());
class Estagiario {
    constructor(enumerable = true, configurable = true) {
        this.enumerable = enumerable;
        this.configurable = configurable;
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
    }
}
const estagiario = new Estagiario;
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=classes2.js.map