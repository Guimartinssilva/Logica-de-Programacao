//     2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências.
// Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
//     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
//     b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência
// acima considerando 15% de desconto

let consumo = 280
const custo = 0.05

valorPago = +consumo * +custo

console.log(valorPago)


let consumo2 = 280
const custo2 = 0.05
let desconto = 15/100

valorPago2 = (+consumo2 * +custo2) - desconto

console.log(valorPago2)