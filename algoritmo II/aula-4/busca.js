const listaLivros = require('./arrayOrdenado')
//BUSCA BINARIA


// de = de onde ATE o indice desejado 
// cada vez que a chamar a função tem que pegar o elemento do meio e verificar:
// se o valor buscado é maior ou menor do que o elemento do meio do array
function busca(array, de , ate, valorBuscado){
    const meio = Math.floor((de+ate)/2);
    const atual = array[meio];
// esse if é para verificação se por acaso passar algum valor que não exista,
// por ex o maximo é 50,00 mas passei o valor de 60
// o meu de é maior que meu até
    if(de>ate){
        return -1;
    }
    

    if(valorBuscado===atual.preco){
        return meio;
    }
    if(valorBuscado < atual.preco){
        // dai aqui vai ser uma busca recursiva , que vai chamar a função, porem com novos parametros 
        // como valor buscado é menor que o meio,
        // entao a busca sera do inicio do array até o meio
        // pq não faz sentido buscar o num depois do meio 
        return busca(array, de, meio-1, valorBuscado)
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio+1, ate, valorBuscado)
    }
}
// se eu passar um valor que não existe, excedeu a qtda maxima Stack Overflow
console.log(busca(listaLivros,0,listaLivros.length-1,40));