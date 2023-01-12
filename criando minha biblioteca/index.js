// //import chalk from 'chalk';
// const chalk = require('chalk');
// // para acessar arquivos , usamos o fs:
// const fs = require('fs');


// function extraiLinks(texto){
//     const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
//     const arrayResultados =[];
//     let temp;

//     while((temp = regex.exec(texto)) !== null){
//         arrayResultados.push({ [temp[1]]: temp[2] })
//     }
   
//     return arrayResultados.length ===0 ? 'Não há links' : arrayResultados;
// }


// function trataErro(erro){
//    throw new Error(chalk.red(erro.code,'não há arquivo no caminho'));

// }

// async function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     try{
//         const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
    
//         return extraiLinks(texto);
//     }catch(erro){
//         trataErro(erro)
//     }
//     finally{
//         console.log(chalk.yellow('operação concluida!'));
//     }
// }

// function leOArquivo(params) {
//     console.log("Comecou");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Acabou");
//             resolve("valor retornado")
//         }, 2000);
//     })
// }
// // function pegaArquivo(caminhoDoArquivo){
// //     const encoding = 'utf-8';
// //     //promises é a maneira do JS entender que é modelo assincrono
// //     //then: le o arquivo ENTAO (depois de ler o arquivo vc faz o que a gente escrever aqui)
// //     // then é um metodo calback tb
// //     fs.promises
// //     .readFile(caminhoDoArquivo,encoding)
// //     //leOArquivo("batata")
// //     .then((texto) => console.log(chalk.green(texto)))
// //     .catch((erro) => trataErro(erro))

// // }

// // function pegaArquivo(caminhoDoArquivo){
// //     const encoding = 'utf-8';
// //     fs.readFile(caminhoDoArquivo,encoding,(erro,texto) =>{
// //         if(erro){
// //             trataErro(erro);
// //         }
// //         console.log(chalk.green(texto));
// //     })
// // }


// module.exports = pegaArquivo;


const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch(erro) {
    trataErro(erro);
  }
}

module.exports = pegaArquivo;

