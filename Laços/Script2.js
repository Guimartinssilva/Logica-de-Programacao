function maiorNumero(numero){
    let maior = numero[0]
    for (let i = 0; i < numero.length; i++){
        const valorAtual = numero[i]
        if(valorAtual > maior){
            maior = valorAtual
        }
    }
    return maior
}


const retorno = maiorNumero([11, 15, 18, 14, 12, 13])
console.log(retorno)