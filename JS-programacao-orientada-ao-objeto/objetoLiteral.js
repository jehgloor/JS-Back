const user = {
    nome:"Jeh",
    email:"j@.com",
    nascimento:"04/04/91",
    role: "estudante",
    ativo:true,
    exibirInfos : function(){
        console.log(`nome: ${this.nome} - email: ${this.email}`);
    }
}
        //user.exibirInfos()
// const exibir = user.exibirInfos
// exibir() -> dessa forma da undefined pq a palavra this nao esta atrelada a nada

        // const exibir = function(){
        //     console.log(this.nome);
        // }
//nesse caso agora to atrelando o objeto user na função q antes dava uindefined
// é tipo atribuir 
       // const exibirNome = exibir.bind(user)
       // exibirNome()

       const admin = {
        nome:"Mariana",
        email:"mari@.com",
        nascimento:"04/04/91",
        role: "admin",
        ativo:true,
        criarCurso(){
            console.log('curso criado');
        } 
    }

    //PARA HERDAR
    Object.setPrototypeOf(admin, user)
    admin.criarCurso();
    admin.exibirInfos();