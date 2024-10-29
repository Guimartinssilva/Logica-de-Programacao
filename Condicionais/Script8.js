const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


// a) O que a primeira linha está fazendo?
//Pedi para o usuário colocar um valor e vai transformar em NUMBER

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//10 -> 'esse numero passou no teste'
//-10 -> Não mostra nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//sim, a variável não foi invocada