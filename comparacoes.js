//== comparação implícita
//compara apenas o valor

const numero = 5;
const texto = "5";

console.log(numero == texto);


//=== comparação explícita
//compara o valor e o tipo de dado

const segundoNumero = 13;
const segundoTexto = "13";

console.log(segundoNumero === segundoTexto);

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof segundoNumero);
console.log(typeof segundoTexto);

//conversão explícita

Number();
String();