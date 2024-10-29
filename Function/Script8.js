let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//O programa pede para insirir um texto, que depois vai ser levada para uma function tornando ela uma frase tudo minúscula e procura se na frase tem a palavras "cenoura" assim retornando um booleano.

//"Eu gosto de cenoura" -> TRUE
//"CENOURA é bom pra vista" -> TRUE
//"Cenouras crescem na terra" -> TRUE