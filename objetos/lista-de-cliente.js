//========== EXERCICIO ==========//
// extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco

const clientes = [
    {
        nome : "Jessica",
        idade: 36,
        cpf: "05923667908",
        email:"jessicagloor@hotmail.com",
        fones: ["43991561423","43991611956"],
        dependentes : [
            {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
            {
            nome: "Maria Julia",
            parentesco: "filha",
            dataNasc: "04/01/2014"}
        ]
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes:[
            {
                nome:"Sophia",
                parentesco:"filha",
                dataNasc:"30/08/2020"
            }
        ]
    }
]

const listaDependentes = [];
//... espalha o conteudo 
clientes.forEach( cliente => {
    listaDependentes.push(...cliente.dependentes)
    
})
console.table(listaDependentes);

// do jeito do professor :
const lista = [...clientes[0].dependentes,...clientes[1].dependentes];
console.log(lista);



