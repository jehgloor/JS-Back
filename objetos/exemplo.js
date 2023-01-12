// só para teste 

//========== EXERCICIO ==========//
//aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança

class Cliente {
    constructor(nome,cpf,email,saldo){
        this.nome=nome;
        this.cpf=cpf;
        this.email=email;
        this.saldo=saldo;
    }

    depositar = function(valor){
        this.saldo += valor;
    }
    
    
}

class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo)
        this.saldoPoup=saldoPoup;
    }
    
}

const ju = new ClientePoupanca("Ju","12345678998","ju@hotmail.com",100,200);

console.log(ju);
// adicionando ao prototipo do clientePoupança um novo comportamento 
// acessar o clientePoupança acessar o prototype e adicionar um novo metodo
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30);
console.log(ju.saldoPoup);