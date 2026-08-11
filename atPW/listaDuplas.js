class No {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

let n1 = new No(10);
let n2 = new No(20);

n1.proximo = n2;
n2.anterior = n1;