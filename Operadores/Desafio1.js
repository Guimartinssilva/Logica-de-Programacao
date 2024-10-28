// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

const valor1 = 77

const resultado1 = (+valor1 - 32) * (5/9) + 273.15

console.log(resultado1, "K")



const valor2 = 80

const resultado2 = (valor2) * (9/5) + 32

console.log(resultado2, "°F")



const valor3 = 30

const resultado3 = (valor3) * (9/5) + 32

console.log(resultado3, "°F")

const resultado4 = (resultado3 - 32) * (5/9) + 273.15

console.log(resultado4, "K")



const valor4 = prompt("Insira um valor em °C.")

const resultado5 = (valor4) * (9/5) + 32
//Foi transformado em  °F
console.log(resultado5, "°F")

const resultado6 = (resultado5 - 32) * (5/9) + 273.15
//Foi transformado em °K
console.log(resultado6, "K")