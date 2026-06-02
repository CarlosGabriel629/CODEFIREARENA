let notas = [4,4,7,9,]

soma =0 
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

let media = soma / notas.length
let reprovado = media < 7

if (reprovado) {
    console.log('Reprovado')
} else {
    console.log('Aprovado')
}

console.log('A media é: ' + media);
