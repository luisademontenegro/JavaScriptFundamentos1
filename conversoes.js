//tipo de dado
//booleano

//conversão implícita

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero == numeroString); //número convertido em string e elementos comparados)
console.log(numero + numeroString);


//conversão explícita

//Number () para transformar string em número
//String() ou "number.toString() para transformar número em string

console.log(numero + Number(numeroString));

//Podemos usar o operador de soma + para fazer a conversão de textos para números,
//colocando-os antes das variáveis:
// let largura = "10";
// let altura = "5";
// console.log( + largura * + altura);
