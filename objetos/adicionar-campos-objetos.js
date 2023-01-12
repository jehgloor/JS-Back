//========== EXERCICIO ==========//
//adicionar informações importantes que ainda estão faltando , como telefone e tambem seus valores 

const cliente = {
    nome : "Jessica",
    idade: 36,
    cpf: "05923667908",
    email:"jessicagloor@hotmail.com"
}
// quero adicionar telefone no objeto, só adicionar o ponto 

console.log(cliente);

// adicionando o atributo telefone
cliente.fone = "43991561423"

console.log(cliente);

// agora quero alterar o telefone :
cliente.fone = "55991561423";
console.log(cliente);

delete cliente.fone

console.log(cliente);