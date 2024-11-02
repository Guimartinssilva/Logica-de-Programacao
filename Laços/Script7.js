// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//     c) Por fim, imprima o array com os nomes dos bichinhos no console


let quantidade = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (quantidade === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let nomesPets = [];
    for (let i = 0; i < quantidade; i++) {
        let nome = prompt(`Digite o nome do bichinho:`)
        nomesPets.push(nome)
    }
    console.log("Os nomes dos seus bichinhos são:", nomesPets)
}