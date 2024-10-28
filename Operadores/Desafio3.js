// a) Procure uma forma de converter libra (lb) para quilograma (kg)
//e escreva um programa que converta 20lb para kg. Imprima  a resposta
//no console da seguinte forma: 

let libra = 20;
const resultado1 = libra / 2.2046;

console.log(libra, 'lb equivale a', resultado1, 'kg');

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e 
//escreva um programa que converta 10.5oz para kg. Imprima  a resposta 
//no console da seguinte forma: 

let onca = 10.5
const resultado2 = onca / 35.274

console.log(onca, 'oz equivale a', resultado2, 'kg')

// c) Procure uma forma de converter milha (mi) para metro (m) e 
//escreva um programa que converta 100mi para m. Imprima  a resposta 
//no console da seguinte forma: 

let milha = 100
const resultado3 = milha * 1609

console.log(milha, 'mi equivale a', resultado3, 'm')

// d) Procure uma forma de converter pés (ft) para metro (m) e 
//escreva um programa que converta 50ft para m. Imprima  a resposta 
//no console da seguinte forma: 

let pes = 50
const resultado4 = pes / 3.281

console.log(pes, 'ft equivale a', resultado4, 'm')

// e) Procure uma forma de converter galão (gal) para litro (l) e 
//escreva um programa que converta 103.56gal para litro. Imprima a 
//resposta no console da seguinte forma:

let galao = 103.56
const resultado5 = galao * 378.5

console.log(galao, 'gal equivale a', resultado5, 'l')

// f) Procure uma forma de converter xícara (xic) para litro (l) e 
//escreva um programa que converta 450xic para litro. Imprima  a 
//resposta no console da seguinte forma: 

let xicara = 450
const resultado6 = xicara * 28.413

console.log(xicara, 'xic equivale a', resultado6, 'l')

// g) Escolha ao menos um dos itens anteriores e modifique o 
//programa para que ele peça ao usuário o valor da unidade 
//original antes de converter

let libra1 = prompt("Digite um numero em libra para transformar em kg");
const resultado7 = libra1 / 2.2046;

console.log(libra1, 'lb equivale a', resultado7, 'kg');