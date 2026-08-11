class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

let raiz = new No(10);

raiz.esquerda = new No(5);
raiz.direita = new No(20);