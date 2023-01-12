//========== EXERCICIO ==========//
// acessar um objeto com informações de um cliente e exibir essas informações no console

const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com"
}

console.log(`nome: ${cliente.nome}, idade: ${cliente.idade} anos, cpf: ${cliente.cpf}, email ${cliente.email}`);
// ou tipo 
console.log("os 3 primeiros digitos do cpf é "+cliente.cpf.substring(0,3));