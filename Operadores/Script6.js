const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//bool1 && bool2 : FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//bool1 && bool2 && bool3 : FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//!resultado = False : TRUE
//bool1 || bool2 : TRUE
//!resultado && (bool1 || bool2) : TRUE

console.log("d. ", typeof resultado)
//typeof : BOOLEAN