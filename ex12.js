

let numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log('Média: ' + media);
console.log('Números acima da média:');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
}   