const livros = require('./lista-livros');
const menorValor = require('./menor-valor');

for(let atual = 0 ; atual< livros.length; atual++){
    // menor vai guardar um inteiro (o indice de 0 a 5)
    let menor = menorValor(livros, atual);
    

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);

    let livroMenorPreco = livros[menor];
    console.log('livro menor preço',livros[menor]);
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);