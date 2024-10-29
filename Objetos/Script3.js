const filme = {
    diretor: 'Anthony Russo',
    nome: 'vingadores',
    anoLancamento: 2012,
    elenco: ['Chris Evans', 'Chris Hemsworth', 'Robert D. Jr.'],
    visto: true,
    personagens: ['capitão América', 'Thor', 'Homem de ferro']
}

console.log(`${filme.elenco[0]} - ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} - ${filme.personagens[1]}`)
console.log(`${filme.elenco[2]} - ${filme.personagens[2]}`)

console.log(' ')

filme.elenco.splice(0, 1, "Xuxa")

console.log(filme)