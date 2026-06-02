let numeros = [1,2,-3,4,5,-6,7,8,-9,10]

let numerosPositivos = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        numerosPositivos++
    }
}

console.log('Quantidade de numeros positivos: ' + numerosPositivos);