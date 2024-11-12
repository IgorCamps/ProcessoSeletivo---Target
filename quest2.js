function contarOcorrenciasDeA(texto) {
    let contador = 0;
    for (let char of texto) {
        if (char.toLowerCase() === 'a') {
            contador++;
        }
    }
    return `A letra 'a' aparece ${contador} vezes na string.`;
}

// Exemplo de uso
let texto = "Exemplo de string com letras Aleatórias";
console.log(contarOcorrenciasDeA(texto));
