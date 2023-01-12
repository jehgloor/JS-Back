export default class User {
    // export default => para exportar para usar em outras partes do projeto 
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo=true){
        this.#nome=nome;
        this.#email=email;
        this.#nascimento=nascimento;
        this.#role=role || 'estudante';
        this.#ativo=ativo;
    }
    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }
    get nascimento(){
        return this.#nascimento;
    }
    get role (){
        return this.#role;
    }
    get ativo(){
        return this.#ativo;
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error ('formato não é valido')
        }
        this.#nome=novoNome;
    }

    set email(novoEmail){
        this.#email=novoEmail;
    }
    set nascimento(novoNascimento){
        this.#nascimento=novoNascimento;
    }
    set role(novoRole){
        this.#role=novoRole;
    }
    set ativo(novoAtivo){
        this.#ativo=novoAtivo;
    }


    
    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role} , ${this.ativo}`
    }
}







//console.log(User.prototype.isPrototypeOf(novoUser)); // deve retornar TRUE




