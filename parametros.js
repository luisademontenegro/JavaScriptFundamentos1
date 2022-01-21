function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(212, 223));


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade("Luisa", 30));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));