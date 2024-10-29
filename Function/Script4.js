function array(numeros) {
    const novoArray = [];
    const primeiroNumero = numeros[0] / 2;
    const ultimoNumero = numeros[numeros.length - 1] / 2;
    novoArray.push(ultimoNumero);
    novoArray.push(primeiroNumero);
  //   novoArray[0] = ultimoNumero
  //   novoArray[1] = primeiroNumero
    return novoArray;
}