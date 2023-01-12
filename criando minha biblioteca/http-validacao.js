const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message)
}

async function checaStatus(arrayUrls){

    try{
    // vamos usar o promesses
    // é que queremos q retorne:
        const arrayStatus = await Promise
            .all(arrayUrls
                .map(async url =>{
                    const res = await fetch(url)
                    return res.status
    }))
    
   
    return arrayStatus
}catch(erro){
       manejaErros(erro) 
}
}
function geraArraydeUrls(arrayLinks){
    //loop para cada{chave:valor}
    //objeto -> [valor] -> vai retornar o valor do objeto 
    //Object.values(objeto)
    return arrayLinks
        .map((objetoLink) => Object
            .values(objetoLink).join())

}

async function validaUrls(arrayLinks){
    const links = geraArraydeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    
    const resultados = arrayLinks.map((objeto,indice) => ({ 
        ...objeto, 
        status:statusLinks[indice]
    } ))
    return resultados
}

module.exports = validaUrls;