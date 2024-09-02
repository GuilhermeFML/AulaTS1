"use strict";
function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        return null;
    }
    let maiorElemento = array[0];
    for (const elemento of array) {
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }
    return maiorElemento;
}
const numeros = [1, 5, 3, 9, 2];
const maiorNumero = encontrarMaiorElemento(numeros);
console.log(`O maior número é: ${maiorNumero}`);
const palavras = ['carro', 'moto', 'ônibus', 'avião'];
const maiorPalavra = encontrarMaiorElemento(palavras);
console.log(`A maior palavra é: ${maiorPalavra}`);
