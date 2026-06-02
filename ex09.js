const readline = require('readline-sync');

console.log ('Digite um nome para verificar se ele está na lista: ');
let nome = readline.question();

let listaDeNomes = ['Maria', 'João', 'Pedro', 'Ana', 'Lucas'];

if (listaDeNomes.includes(nome)) {
    console.log('O nome está na lista.');
} else {
    console.log('O nome não está na lista.');
}


