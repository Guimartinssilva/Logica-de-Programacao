let menu = 0
let listaDoador = []

while(menu !== 5){
    menu = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        1. Cadastrar doador
        2. Listar doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair
        Escolha uma opção:`))
    switch(menu){
        case 1:
            cadastraDoador()
            break
        case 2:
            console.log("Listagem de doadores:")
            listaDoadores(listaDoador)
            break
        case 3:
            console.log("Resultado da busca:")
            listaDoadores(doadoresPorTipoSanguineo(listaDoador))
            break
        case 4:
            console.log("Resultado da busca:")
            listaDoadores(doadoresPorDataUltimaDoacao(listaDoador))
            break
        case 5:
            console.log("Sair.")
            break
        default:
            console.log("A opção digitada é inválida, tente novamente")
    }
}
function cadastraDoador(){
    const doadorCadastro = {
        nome: prompt("Informe o nome do doador:").toLowerCase(),
        idade: Number(prompt("Informe a idade do doador:")),
        peso: Number(prompt("Informe o peso em Kg do doador:")),
        tipoSanguineo: prompt("Informe o tipo sanguíneo do doador:").toUpperCase(),
        dataUltimaDoacao: new Date(
            Number(prompt("Informe o ano da última doação feita pelo doador:")),
            Number(prompt("Informe o mês da última doação feita pelo doador:")),
            Number(prompt("Informe o dia da última doação feita pelo doador:")))
    }
    listaDoador.push(doadorCadastro)
}

function listaDoadores(listaDoadores1 = []){
    for(let i = 0; i < listaDoadores1.length; i++){
        console.log(`${listaDoadores1[i].nome} | ${listaDoadores1[i].idade} | ${listaDoadores1[i].peso} | ${listaDoadores1[i].tipoSanguineo} | ${listaDoadores1[i].dataUltimaDoacao.toLocaleDateString()}`)
    }
}

function doadoresPorTipoSanguineo(listaDoadores1){
    let lista = []
    let tipoSanguineoBusca = prompt("Informe o tipo sanguineo que deseja buscar:").toUpperCase()
    for(let doador of listaDoadores1){
        if(doador.tipoSanguineo === tipoSanguineoBusca){
            lista.push(doador)
        }
    }
    return lista
}

function doadoresPorDataUltimaDoacao(listaDoadores1){
    let lista = []
    let ultimaData = new Date(
        Number(prompt("Informe o ano da última doação feita pelo doador:")),
        Number(prompt("Informe o mês da última doação feita pelo doador:")),
        Number(prompt("Informe o dia da última doação feita pelo doador:")))
    for(let doador of listaDoadores1){
        if(doador.dataUltimaDoacao <= ultimaData){
            lista.push(doador)
        }
    }
    return lista
} 