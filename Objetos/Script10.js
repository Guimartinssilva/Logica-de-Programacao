// Crie uma variável de escopo global que guarde um array vazio chamada carrinho.

const carrinho = []

// Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    fruta: 'morango',
    disponibilidade: true
}

const fruta2 = {
    fruta: 'uva',
    disponibilidade: true
}

const fruta3 = {
    fruta: 'limão',
    disponibilidade: true
}

// Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function recebeFruta(fruta) {
    carrinho.push(fruta)
}

recebeFruta(fruta1)
recebeFruta(fruta2)
recebeFruta(fruta3)

// Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)