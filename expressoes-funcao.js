//declaração de função

function minhaFuncao(param){
    //bloco de código;
}

// minhaFuncao("param")

//expressão de função

// const soma = function(num1, num2) {return num1 + num2};

// console.log(soma(1, 3));

//diferença principal: HOISTING
console.log(apresentar());

function apresentar() {
    return "olá"
}

//o de cima roda, o de baixo dá erro pois a const não pode ser usada sem ter passado por ela
//exceções: função declarada com nome e VAR

console.log(soma(1, 7));

const soma = function(num1, num2) {return num1 + num2};