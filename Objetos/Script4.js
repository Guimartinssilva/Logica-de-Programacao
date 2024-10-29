const pessoa = {
    nome: 'Guilherme',
    idade: 23,
    generoMusical: 'Pop',
}

function funcao(pessoa1) {
    pessoa1 = pessoa
    const novaPessoa = {
        ...pessoa1,
        comidas: ['pizza', 'pão de alho', 'hamburguer'],
        amigo: {
            nome: 'Peter',
            idade: 40,
        }
    }    

    const comida = novaPessoa.comidas
    console.log(`O nome da Pessoa é ${novaPessoa.nome} sua comida preferida é ${comida[0]}, ${comida[1]} e ${comida[2]}, seu melhor amigo se chama ${novaPessoa.amigo.nome} e tem ${novaPessoa.amigo.idade} anos.`)}

funcao()