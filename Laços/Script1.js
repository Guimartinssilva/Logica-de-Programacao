let pergunta
let soma = 0

while (pergunta !== 0){
    pergunta = Number(prompt('Digite um número para somar ou 0 para encerrar:'))
    soma += pergunta
}

console.log(soma)