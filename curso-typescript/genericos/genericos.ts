function echo(objeto:any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({nome:'João', idade:27}))

// Usando Generics
function echoMelhorado<TIPO>(objeto:TIPO): TIPO {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado(27))
console.log(echoMelhorado({nome:'João', idade:27}))

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args:T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome:string, idade:number }>([
    { nome:'Fulano', idade:22 },
    { nome:'Ciclano', idade:23 },
    { nome:'Beltrano', idade:24 }
])

type Aluno = { nome:string, idade:number }
imprimir<Aluno>([
    { nome:'Fulano', idade:22 },
    { nome:'Ciclano', idade:23 },
    { nome:'Beltrano', idade:24 }
])

// Tipo Genérico
type Echo = <T>(data:T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Classe com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operador1: T, public operador2: T) {}

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'dia').executar())
// console.log(new OperacaoBinaria({}, T).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operador1 + this.operador2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

