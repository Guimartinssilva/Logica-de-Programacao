//exemplo 1
function comparaNumeros(num1, num2){
    if (num1 === num2) {
        console.log('os números são iguais')
    } else{
        console.log('os números não são iguais')
    }
}

let numero1 = prompt('Digite um número')
let numero2 = prompt('Digite outro número')

let compara = comparaNumeros(numero1, numero2)

//(2, 4) -> Não são iguais
//(2, 2) -> São iguais


//exemplo 2
function numeros(num5, num6){
    if (num5 === num6) {
        return 'os números são iguais'
    } else{
        return 'os números não são iguais'
    }
}
console.log(numeros(12, 80))


//exemplo 3
const num3 = 12
const num4 = 20

if (num3 === num4) {
    console.log('os números são iguais')
} else{
    console.log('os números não são iguais')
}