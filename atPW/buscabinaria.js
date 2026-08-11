let numeros = [10, 20, 30, 40, 50];

let inicio = 0;
let fim = numeros.length - 1;
let procurado = 40;

while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (numeros[meio] === procurado) {
        console.log("Encontrado!");
        break;
    }

    if (numeros[meio] < procurado) {
        inicio = meio + 1;
    } else {
        fim = meio - 1;
    }
}