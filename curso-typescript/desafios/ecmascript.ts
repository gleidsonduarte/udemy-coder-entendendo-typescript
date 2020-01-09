// Exercicio 1
const dobro = (valor:number):number => valor * 2
console.log(dobro(10))

// Exercicio 2
const dizerOla = (nomePessoa?:string):void => {
    if (nomePessoa === undefined) {
        nomePessoa = "Pessoa"
    }
    console.log(`Olá, ${nomePessoa}!`)
}
dizerOla()
dizerOla("Anna")

// Exercicio 3
let nums = [-3, 33, 38, 5]
console.log(nums)

// Exercicio 4
let array = [55, 20]
console.log(...array)

// Exercicio 5
let notas = [8.5, 6.3, 9.4]
console.log(...notas)

// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 }
//let primeiroNome = cientista.primeiroNome
//let experiencia = cientista.experiencia
const {primeiroNome:pn, experiencia:e} = cientista
console.log(pn)
console.log(e)