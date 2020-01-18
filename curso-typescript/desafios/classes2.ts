// Resolução exercício 1
class Moto {
    velocidadeMoto: number = 0

    constructor(public nome: string) {

    }

    buzinar() {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidadeMoto = this.velocidadeMoto + delta
    }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidadeMoto)
moto.acelerar(30)
console.log(moto.velocidadeMoto)

// Exercício 2 - Herança
abstract class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {

    }

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area (): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
console.log(retangulo.area())
 
class Estagiario {
    private _primeiroNome: string = ''

    constructor(public enumerable: boolean = true, public configurable: boolean = true) {

    }

    get primeiroNome() {
        return this._primeiroNome
    }

    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        }
    }
}

const estagiario = new Estagiario
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)