const p1 = prompt('Concluiu o Ensino Médio? S(SIM) ou N(NÃO)' )
const p2 = prompt('Mais de 18 anos? S(SIM) ou N(NÃO)')
const p3 = prompt('Esta cursando outra faculdade? S(SIM) ou N(NÃO)')



function dados(r1,r2,r3){
    if(r1 === "S" && r2 === "S" && r3 === "S"){
        return 'Pode estudar aqui.'
    }else{
        return 'Não poder estudar aqui.'
    }
}

console.log(dados(p1, p2, p3))