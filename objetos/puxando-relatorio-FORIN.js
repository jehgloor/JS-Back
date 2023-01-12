//========== EXERCICIO ==========//
//percorrer um objeto e extrair informações basicas do cliente em um formato mais legivel e de forma automatizada para fornecer a outros departamentos do banco




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

let relatorio = "";
// FOR IN É PARA OBJETOS :
// cada vez que percorre o o for o info é como se fosse a variavel i
for ( let info in cliente){
    // se for objeto ou função nao vai imprimir 
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function"){
        continue
    }else{

        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
   
}

console.log(relatorio);
