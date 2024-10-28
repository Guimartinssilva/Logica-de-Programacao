// let nome2  
// let idade3
// // Será impresso: underfined, por causa que não foi adicionado um valor.
// console.log(typeof nome2);
// console.log(typeof idade3);

let nome3 = prompt("Qual é o seu nome?");
let idade4 = prompt("sua idade?");
// Será impresso: string, por que agora foi solicitado um valor.
console.log(typeof nome3);
console.log(typeof idade4);

console.log("Olá " + nome3 + ", você tem " + idade4 + " anos.");