

const readline = require('readline-sync');          

let cadastroDeNotas = readline.questionInt('Quantas notas deseja cadastrar? ');

let notas = [];
let aprovado = 0;
let reprovado = 0;
let soma = 0;

for (let i = 0; i < cadastroDeNotas; i++) {
    let nota = readline.questionInt('Digite uma nota: ');
    notas.push(nota);
    soma += nota;

    if (nota >= 7) {
        aprovado++;
    } else {
        reprovado++;
    }
}

let maiorNota = Math.max(...notas);
let menorNota = Math.min(...notas);
let media = soma / cadastroDeNotas;

console.log('Maior nota: ' + maiorNota);
console.log('Menor nota: ' + menorNota);
console.log('Média da turma: ' + media.toFixed(2));
console.log('Quantidade de aprovados: ' + aprovado);
console.log('Quantidade de reprovados: ' + reprovado);  