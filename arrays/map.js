
// ==========EXERCIO ==============//
// adicionar 1 numero em cada indice do array 
// no caso foi usado o metodo map , e o if ternario 
// IF TERNARIO : exemplo exatamente do que ta acontecendo ali embaixo 
// if (nota==10){
//     return nota
// }else{
//     nota = nota +1
// }
const notas = [10 , 9 , 8 , 7 , 6];
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : nota = nota +1)
console.log(notasAtualizadas);



