
let idades = [12,22,3,4,5]
 
let MaiorDeIdade = 0
let MenorDeIdade = 0

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        MaiorDeIdade++
    } else {
        MenorDeIdade++
    }
}

console.log('Maior de idade: ' + MaiorDeIdade);
console.log('Menor de idade: ' + MenorDeIdade);