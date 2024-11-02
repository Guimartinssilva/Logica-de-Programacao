function frase(palavras){
    let fraseFinal = ''
    for (let palavra of palavras){
        fraseFinal = fraseFinal + palavra + ' '
    }
    return fraseFinal.trimEnd()
}

const minhasPalavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
console.log(frase(minhasPalavras))