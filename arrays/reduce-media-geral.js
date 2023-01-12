// ==========EXERCIO ==============//
// com a média de todos os alunos de 3 salas calcule a média geral de cada sala

const salaJS = [7, 8, 8, 7, 10 , 6.5 , 4, 10, 7];
const salaJava = [6 , 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function mediaSala(notasDaSala) {
    //reduce precisa sempre de dois parametros , ACUMULADOR e ATUAL
    // valor atual = vai pulando de um em um 
    // o 0 depois do acumulador é como se declarasse uma variavel de somaDasNotas = 0
    const somaDasNotas = notasDaSala.reduce((acum, atual)=> {
        return atual + acum;
    },0)
    return somaDasNotas / notasDaSala.length
}
console.log(`media da sala de javaScrpt ${mediaSala(salaJS)}`);
console.log(`media da sala de javaScrpt ${mediaSala(salaJava)}`);
console.log(`media da sala de javaScrpt ${mediaSala(salaPython)}`);

const notas = [ 10,6.5,8,7];

const media = notas.reduce((acum,atual) => {
    return atual + acum
   }, 0) /notas.length
console.log(media);





// UMA OUTRA FORMA DE FAZER 
function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
const soma = numeros.reduce(operacaoNumerica, 0);