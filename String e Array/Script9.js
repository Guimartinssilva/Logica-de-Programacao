// a) Crie um array vazio e guarde-o em uma variável, 
//chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar 
//no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa 
//que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console

let listaDeTarefas = []

listaDeTarefas1 = prompt("Digite uma tarefa diária:")
listaDeTarefas2 = prompt("Digite uma outra tarefa diária:") 
listaDeTarefas3 = prompt("Digite uma mais uma tarefa diária:")

listaDeTarefas[0] = listaDeTarefas1
listaDeTarefas[1] = listaDeTarefas2
listaDeTarefas[2] = listaDeTarefas3

console.log(listaDeTarefas)


const remova = prompt("digite um numero entre 0, 1 ou 2.")

listaDeTarefas.splice(remova, 1)

console.log(listaDeTarefas)