function cliente (nome,cpf,email,saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.saldo=saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const andre = new cliente("Andre","12345678998","andre@hotmail.com",100);

console.log(andre);
andre.depositar(30);
console.log(andre);