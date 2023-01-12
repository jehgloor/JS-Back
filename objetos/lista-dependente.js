//========== EXERCICIO ==========//
// verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente
// tipo adicionar mais de um dependente, fazer um array utilizando o PUSH()

// antes estava assim 
// const cliente = {
//     nome : "Jessica",
//     idade: 36,
//     cpf: "05923667908",
//     email:"jessicagloor@hotmail.com",
//     fones: ["43991561423","43991611956"],
//     dependente : {
//         nome: "Sara Silva",
//         parentesco: "filha",
//         dataNasc: "20/03/2011"
//     }
// }
const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com",
    fones: ["43991561423","43991611956"],
    dependente : [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}


cliente.dependente.push({
    nome: "Maria Julia",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})


//console.log(cliente);
// agora para trazer o nome só da mais nova:
// usando o filter 

const filhaMaisNova = cliente.dependente.filter(dependente => dependente.dataNasc === "04/01/2014")

// se eu quero acessar o nome tenho q declarar o indice do meu array 
console.log(filhaMaisNova[0].nome);

//para retornar o objeto inteiro daria para simplesmente retornar a variavel inteira 
// dessa forma :
console.log(filhaMaisNova);