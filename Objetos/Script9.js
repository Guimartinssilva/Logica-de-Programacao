// Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const objeto1 = {
    nome: 'guilherme',
    idade: 23,
    profissao: 'Jogador'
}

const objeto2 = {
    nome: 'Peter',
    idade: 37,
    profissao: 'Amigo da vizinhança'
}

function funcao(objeto1){
    const resultado = []
    let ob1 = objeto1.nome
    let qtd1 = objeto1.nome.length
    let ob2 = objeto1.idade
    let ob3 = objeto1.profissao
    let qtd2 = objeto1.profissao.length
    resultado.push(ob1)
    resultado.push(qtd1)
    resultado.push(ob2)
    resultado.push(ob3)
    resultado.push(qtd2)
    return resultado
}

console.log(funcao(objeto1))
console.log(funcao(objeto2))