// function User(nome,email){
//     this.nome=nome;
//     this.email=email;


//     this.exibirInfo = function(){
//         return `nome ${nome} - email ${email}`
//     }
// }

// const novoUser = new User('jeh' , ' j@j.com')
// console.log(novoUser.exibirInfo());

// function Admin (role){
//     User.call(this,'Juliana','j@j.com')
//     this.role = role || 'estudante';
// }


// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfo());
// console.log(novoUser.role);


        // CRIANDO UM NOVO TIPO :
const user = {
    init : function(nome, email){ // metodo construtor
        this.nome=nome;
        this.email=email;
    },

    exibirInfos: function (){
        return this.nome;
    }
}

            // criando um novo prototipo a partir do User:
const novoUser = Object.create(user)
novoUser.init('jessica','j@j.com') //agora usando com o metodo construtor
console.log(novoUser.exibirInfos());
//console.log(novoUser.exibirInfos('Jessica'));
            // um metodo para testar se o novoUser é um protoripo de User:
//console.log(user.isPrototypeOf(novoUser)); // esse metodo retorna true ou false


        //DIFERENÇA ENTRE CREATE E INIT :
    //create faz mais sentido pro modelo de prototipo 
    //os prototipo aparece em muitos lugares 
    //as classes são feitas a partir desse prototipo 


