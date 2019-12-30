/* Como eu resolvi o desafio
let funcionarios: {
    nome: string
}

funcionarios = { nome: 'João' }
console.log(funcionarios)
funcionarios = { nome: 'Maria' }
console.log(funcionarios)
funcionarios = { nome: 'Pedro' }
console.log(funcionarios)

function baterPonto(horario:number):string {
    if (horario <= 8) {
        return 'Ponto normal'
    } else {
        return 'Fora do horário'
    }
}

let ponto: ( horario:number ) => string
ponto = baterPonto
console.log(ponto(7))
console.log(ponto(18))
*/

// Como o professor do curso resolveu o desafio
let funcionario: {
    supervisores: string[],
    baterPonto: (horas:number) => string
} = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto (horario:number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// funcionario = {}