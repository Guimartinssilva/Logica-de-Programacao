function numeros(num1, num2){
    if (num1 === num2) {
        return 'Os números são iguais'
    } else if(num1 > num2){
        return 'O 1° número maior'
    } else {
        return 'O 2° número maior'
    }
}
console.log(numeros(6,2))

const numero1 = prompt('Digite um número')
const numero2 = prompt('Digite outro número')

const compara = numeros(numero1, numero2)