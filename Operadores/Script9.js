// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)

let idade = prompt("Qual é a sua idade?")
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga")

console.log("Sua idade é maior do que a do seu melhor amigo?", +idade > +idadeAmigo);

console.log(idade - idadeAmigo)