//========== EXERCICIO ==========//
// adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancarias - depositar - sacar

const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com",
    fones: ["43991561423","43991611956"],
    dependente : [
        {
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
        {
        nome: "Maria Julia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    // aqui é como se fosse metodos:
    depositar: function (valor){
       this.saldo+=valor;
    }
}

console.log(cliente.saldo);

cliente.depositar(30)

console.log(cliente.saldo);

cliente.depositar(30)

console.log(cliente.saldo);


