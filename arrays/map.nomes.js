// ==========EXERCIO ==============//
// precisamos padronizar a lista de alunos para conter apenas letras maiusculas

// tem uma função exatamente para isso maiusculas : toUpperCase()

let nomes = ["Ana Julia","Caio Vinicius","BIA Silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())


console.log(nomesAtualizados);

let nome1 = "alura";
let novonome = nome1.toUpperCase();
//console.log(novonome);


const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num){
    return num * 10;
}

const novoNumeros = arrayNums.map(multiplicaPorDez);
console.log(novoNumeros);