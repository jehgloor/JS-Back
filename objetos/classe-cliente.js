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

const je = new Cliente("Jessica","je@hotmail.com","12345678999",100);
//console.log(je);
je.exibirSaldo();
je.depositar(30);
je.exibirSaldo();
