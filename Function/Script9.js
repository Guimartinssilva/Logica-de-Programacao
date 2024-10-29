//A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você:

function receberMensagem(){
    console.log("Eu sou Guilherme, tenho 23 anos, moro em São Leopoldo e sou estudante.")
}
receberMensagem()


//Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function novaPessoa(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
novaPessoa('Guilherme', 23, 'São Leopoldo', 'front-End')