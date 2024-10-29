// 2. Faça um programa que contenha um array com 5 das suas 
//comidas preferidas, armazenado em uma variável. Em seguida, 
//siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas
// comidas preferidas: ", seguida por cada uma das comidas, 
//**uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida 
//preferida. Troque a segunda comida da sua lista pela inserida 
//pelo usuário. Imprima no console a nova lista


const comidas = ["lasanha", "churrasco", "pizza", "carne", "pão de alho"]

console.log(comidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidaPessoa = prompt("Qual é a sua comida preferida?")

comidas[1] = comidaPessoa

console.log(comidas)