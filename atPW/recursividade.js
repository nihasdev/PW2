function contar(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    contar(n - 1);
}

contar(5);