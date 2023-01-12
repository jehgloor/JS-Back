//========== EXERCICIO ==========//
//adicionar dependentes para um dos clientes cadastrados,com nome idade e parentesco

// tipo como se para um seguro e tals
const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com",
    fones: ["43991561423","43991611956"]
}

// criando um novo atributo
cliente.dependente = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

// fazer alguma alteração no dependente

cliente.dependente.nome = "Sara Silva";

console.log(cliente);