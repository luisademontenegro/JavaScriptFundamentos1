function apresentar(nome) {
    return `meu nome é ${nome}`;
}


//Arrow function: nào pode ser nomeada e sempre apresenta const
//Caso seja um código de UMA LINHA, não precisa usar chaves e return
//Se o código tiver mais de uma linha, usar chaves e return
const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de uma linha de intrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
    return "Apenas números entre 1 e 9"
    } else {
        return num1 + num2;
    }
}

//Hoisting: arrow function se comporta como a expressão de função