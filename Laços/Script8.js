// Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(i = 0; i < arrayOriginal.length; i++){
//     console.log(arrayOriginal[i])
// }


// for(i = 0; i < arrayOriginal.length; i++){
//     console.log(arrayOriginal[i] / 10)
// }


// let novoArray = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//      if (arrayOriginal[i] % 2 == 0) {
//         novoArray.push(arrayOriginal[i])
//      }
// }
// console.log(novoArray)


// let array = []
// for(let i = 0; i < arrayOriginal.length; i++){
//     console.log([`O elemento do Index ${i} é: ${arrayOriginal[i]}`])
// }

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for(i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] > maior){
        maior = arrayOriginal[i]
    }
}
console.log(maior)

for(i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] < menor){
        menor = arrayOriginal[i]
    }
}
console.log(menor)