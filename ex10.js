let numeros = [2,3,8,4,5,6,7,9]
let aprovado = 0
let reprocado = 0 

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 7) {
        aprovado++
    } else {
        reprocado++
    }
}

console.log('Quantidade de alunos aprovados: ' + aprovado);
console.log('Quantidade de alunos reprovados: ' + reprocado);