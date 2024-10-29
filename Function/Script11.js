function soma(num1, num2){
    const soma = +num1 + +num2
    return soma
}

function subtracao(num1, num2){
    const subtracao = num1 - num2
    return subtracao
}

function multipicacao(num1, num2){
    const multi = num1 * num2
    return multi
}

function divisao(num1, num2){
    const divisao = num1 / num2
    return divisao
}

let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número:')

console.log(`Primero número: ${num1} e Segundo número ${num2}`)
console.log(`Soma: ${soma(num1, num2)}`)
console.log(`Subtração: ${subtracao(num1, num2)}`)
console.log(`Multipilcação: ${multipicacao(num1, num2)}`)
console.log(`Divisão: ${divisao(num1, num2)}`)