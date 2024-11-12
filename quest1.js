function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
let numero = 21; // pode alterar este valor ou usar uma entrada
console.log(pertenceAFibonacci(numero));
