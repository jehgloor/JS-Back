//========== EXERCICIO ==========//
//percorrer um objeto, verificar se existe a chave 'dependentes' e , caso exista, enviar uma mensagem de oferta de seguro


const cliente = {
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
        dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    // aqui é como se fosse metodos:
    depositar: function (valor){
       this.saldo+=valor;
    }
}

// cria um array 


function ofecererSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`oferta de seguro de vida para ${obj.nome}`);
        
    }
}
// retorna o valor 
console.log(Object.values(cliente));
// um array com varios arrays
console.log(Object.entries(cliente));
ofecererSeguro(cliente)