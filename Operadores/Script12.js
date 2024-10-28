// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.


let numero1 = prompt("Digita um número:")
let numero2 = prompt("Digita outro número:")

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)