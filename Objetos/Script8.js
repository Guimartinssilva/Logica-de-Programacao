// Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const x = {
    nome: "Guilherme",
    apelido: ['Peter', 'Gui', 'PITER']
}

function entrada(x) {
    console.log(`Eu sou ${x.nome}, mas pode me chamar de: ${x.apelido[0]}, ${x.apelido[1]} ou ${x.apelido[2]}`)
}

entrada(x)


// Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novoX = {
    ... x,
    apelido: ['CR7', 'Messi', 'Neymar']
}

function entrada2(novoX) {
    console.log(`Eu sou ${x.nome}, mas pode me chamar de: ${novoX.apelido[0]}, ${novoX.apelido[1]} ou ${novoX.apelido[2]}`)
}

entrada2(novoX)