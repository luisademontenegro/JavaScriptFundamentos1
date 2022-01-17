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
//String() para transformar número em string

console.log(numero + Number(numeroString));