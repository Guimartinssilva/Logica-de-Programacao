// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt('Qual turno você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).')

if(turno === 'M'){
    console.log('Bom Dia!')
}else if (turno === 'V'){
    console.log('Boa tarde!')
}else if(turno === 'N'){
    console.log('Boa noite!')
}else{
    console.log('Você não estuda em nenhum turno.')
}