const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//nome: "Juca", idade: 3, raca: "SRD"
console.log(gato)// nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga)//nome: "Jubo", idade: 3, raca: "SRD"

//'...' retorna os dados que esta guardado em um objeto 