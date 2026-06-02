let numeros = [33,90,44,3,2]

let menorNumero =  numeros[0]

for (let i = 0; i < numeros.length; i++){
    if (numeros[i]< menorNumero){
        menorNumero = numeros[i]
    }   

}
console.log('O menor numero é: ' + menorNumero);