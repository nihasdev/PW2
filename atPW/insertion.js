let numeros = [5, 2, 8, 1];

for (let i = 1; i < numeros.length; i++) {
    let atual = numeros[i];
    let j = i - 1;

    while (j >= 0 && numeros[j] > atual) {
        numeros[j + 1] = numeros[j];
        j--;
    }

    numeros[j + 1] = atual;
}

console.log(numeros);