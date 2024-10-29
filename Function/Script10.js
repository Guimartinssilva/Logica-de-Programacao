//A
function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
  }
  console.log(soma(2, 3));
  
  //B
  function recebeDois(num1, num2) {
    const maior = num1 >= num2;
    return maior;
  }
  console.log(recebeDois(2, 4));
  
  //C
  function recebeUm(num1) {
    const par = num1 % 2 == 0;
    return par;
  }
  console.log(recebeUm(4));
  
  //D
  function recebeString(mensagem) {
    console.log(mensagem.length);
    console.log(mensagem.toUpperCase());
  }
  recebeString("Hello World");