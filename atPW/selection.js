let numeros = [5, 2, 8, 1];

for (let i = 0; i < numeros.length; i++) {
    let menor = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[menor]) {
            menor = j;
        }
    }

    let temp = numeros[i];
    numeros[i] = numeros[menor];
    numeros[menor] = temp;
}

console.log(numeros);