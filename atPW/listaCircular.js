let n1 = new No(10);
let n2 = new No(20);
let n3 = new No(30);

n1.proximo = n2;
n2.proximo = n3;
n3.proximo = n1;