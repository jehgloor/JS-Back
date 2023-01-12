
const livros = require ('./lista-livros')

function menorValor(arrProdutos,posicaoInicial){
    let maisBarato = posicaoInicial; 

    for(let atual = posicaoInicial ; atual<arrProdutos.length;atual++){
        // mais barato : referente a posição do array 
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;