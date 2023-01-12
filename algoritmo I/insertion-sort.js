// inserindo os elementos na posição correta
const livros = require('./lista-livros');
const troca = require('./troca');


function insertionSort(lista){
    for(let atual = 0 ; atual<livros.length; atual++){
        // item que esta sendo analisado:
        let analise = atual; 
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            //chamando a função de outro arquivo
           troca(lista,analise);

            // para parar o loop
            analise--;
        }
    }
    console.log(lista);
}

insertionSort(livros);