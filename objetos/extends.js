//========== EXERCICIO ==========//
// aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupança

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome=nome;
        this.email=email;
        this.cpf=cpf;
        this.saldo=saldo;
    }

    depositar(valor){
        return this.saldo +=valor;
    }
    exibirSaldo(){
        console.log(`O saldo é ${this.saldo}`);
    }
}

class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo);
        this.saldoPoup=saldoPoup;
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const je = new ClientePoup ("Jessica","je@hotmail.com","12345678998",100,200);

console.log(je);
je.depositarPoup(50);
je.depositar(50);
console.log(je);

