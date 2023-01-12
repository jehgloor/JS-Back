import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User('Jessica','j@j.com','2021-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo','r@r.com','2021-01-01')
console.log(novoAdmin.nome);

novoAdmin.nome = 'andre';
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente('Guilherme','g@g.com','2021-01-01')

console.log(novoDocente.exibirInfos());



