const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//Ele ve se o número passado é ímpar(Não passou) ou par(Passou)

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//qualquer número que for par

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//Qualquer número que for ímpar