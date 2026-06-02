const readline = require('readline-sync');

let cadastroDeNumeros = readline.questionInt('quantos numeros deseja cadastrar? ');

let positivos = [];
let negativos = [];

for (let i = 0 ; i < cadastroDeNumeros; i++){

    let numeros = readline.questionInt('Digite um numero: ');

    if (numeros >= 0){
        positivos.push(numeros);
    } else {
        negativos.push(numeros);
    }

}
console.log('Numeros positivos: ' + positivos);
console.log('Numeros negativos: ' + negativos);