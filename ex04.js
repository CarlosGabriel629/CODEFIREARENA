let numeros = [22,2,4,5,6]

let maiorNumero = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }
}

console.log('O maior numero é: ' + maiorNumero);