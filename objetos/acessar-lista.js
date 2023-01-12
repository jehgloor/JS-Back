//========== EXERCICIO ==========//
// consultar um objeto utilizando uma lista de chaves relativas a 
//informações de clientes gerada pelo sistema e printar o resultado na tela 

// chave para acessar 
//LISTA DE CHAVES 

const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com"
}

// criar um array contendo os atributos do objeto e depois acessar o atributo
// utilizando o [] seria a mesma coisa que cliente.nome

const chaves = ["nome","idade","cpf","email"];
console.log(cliente[chaves[0]]);

//OU PODERIA SER ASSIM TAMBEM :
const chave = "nome"
console.log(cliente[chave]);

// dai para printar tudo utiliza o foreach
// do prof estava assim :
//chaves.forEach(info => console.log(cliente[info]));
// mas como eu queria que tambem aparecesse o array de chaves eu adicionei info tambem 
chaves.forEach(info => console.log(info +" "+cliente[info]));




