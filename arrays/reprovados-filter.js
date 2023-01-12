// ==========EXERCIO ==============//
// depois de calcular a medis dos alunos, precisamos mostrar quem está reprovado entre os alunos 

const nomes = ["Ana", "Marcos","Maria","Mauro"];
const notas = [7, 4.5, 8, 7.5];
// notas menores que 5 vai retornar o nome do aluno 
// vamos então filtrar 
// como queremos retornar o nome vamos usar o o filter no nome
// filter retona booleanos
const reprovados = nomes.filter( (aluno,indice) => notas[indice] <5 )

console.log(`reprovados são: ${reprovados}`);

