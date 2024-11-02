const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}


// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// teria 4 linhas de '*' sendo que cada uma somando mais um '*'