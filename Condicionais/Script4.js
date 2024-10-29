function escolha(p){
    switch(p){
        case 'bulbasauro':
            console.log('Planta e Veneno')
            break
        case 'charmander':
            console.log('Fogo')
            break
        case 'squirtle':
            console.log('Água')
            break
        default:
            console.log('Pokémon não encontrada')
            break
    }
}

escolha(prompt('Escolha entre: bulbasauro, charmander ou squirtle'))