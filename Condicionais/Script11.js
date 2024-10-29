// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turno = prompt('Qual turno você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).')

switch (turno){
    case 'M':
        console.log('Bom Dia!')
        break
    case 'T':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Você não estuda em nenhum turno.')
        break
}