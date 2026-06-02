const readline = require('readline-sync');

let CadastroDeNumeros = readline.questionInt('Quantos numeros deseja cadastrar? ');

let pares = [];
let impares = [];

for (let i = 0; i < CadastroDeNumeros; i++) {
    let numeros = readline.questionInt('Digite um numero: ');

    if (numeros % 2 === 0) {
        pares.push(numeros);
    } else {
        impares.push(numeros);
    }
}

console.log('Numeros pares: ' + pares);
console.log('Numeros impares: ' + impares);