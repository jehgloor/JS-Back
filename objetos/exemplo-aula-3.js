//No vídeo anterior vimos um exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns exemplos:
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   // agora juntar os dois :
   // pensando poderia ser assim:
   //const guerreiro = { fichaGuerreiro, equipoGuerreiro }
   const guerreiro1 = { ...fichaGuerreiro, ...equipoGuerreiro }

//console.log(guerreiro1)

// se os atributos tem o mesmo nome, o JS vai reescrever os atributos:
const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

   const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)