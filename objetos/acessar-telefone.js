//========== EXERCICIO ==========//
//acessar a lista de numeros de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um numero em algum cadastro

// quando tem mais de um atributo é interessante ter um array
const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com",
    fones: ["43991561423","43991611956"]
}

cliente.fones.forEach(fone => console.log(fone));