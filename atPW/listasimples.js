class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

let primeiro = new No(10);
primeiro.proximo = new No(20);
primeiro.proximo.proximo = new No(30);

console.log(primeiro.valor);