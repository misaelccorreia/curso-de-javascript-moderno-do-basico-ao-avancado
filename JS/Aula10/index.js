// + faz a adição e também a concatenação
//em JS  ** faz a potenciação
let potencia = 2;
console.log(potencia**2);
// % é o resto da divisão
let num1 = 10;
let num2 = 5;
console.log(num1%num2); //

//----------INCREMENTO
let contador =1; //voce pode utilizar a atribuição de elemento ++
contador++; // também pode ser pre fixado <++contador> mas tem diferença na engine
console.log(contador);
//PRIMEIRO A ACAO DEPOIS A SOMA
let contador2 = 1; 
console.log(contador2++);
//SOMA DEPOIS A ACAO
let contador3 = 1; 
console.log(++contador3);

//----- +=
let contador4 = 0;
contador4 += 2; // isso é igual a contador = contador + 2
console.log(contador4)
//----- *=
let contador5 = 0;
contador5 *= 2; // isso é igual a contador = contador + 2
console.log(contador5)

// Nan - Not a number (´s facilmente tratavel, mas cuidado com o tipo de dado)
const num4 = 10;
const num5 = 'Luiz';
console.log(num4*num5); // resultado inesperado Nan
// java script tenta conciliar os tipos de dados observe a baixo:
const num6 = 10;
const num7 = '5';
console.log(num6*num7); // resultado 50 FRACAMENTE TIPADA, viu que o 5 poderia ser number e solucionou
console.log(typeof num7);

//CONVERTER STRING PARA NUMERO (3maneiras)
const num8 = 10;
const num9 = parseInt('5.2'); //essa funcao converte para inteiro, retorna apenas 5
//const num9 = parseFloat('5.2'); essa funcao converte para ponto flutuante
console.log(num8 + num9); 
console.log(typeof num9);
//OU
const num10 = 10;
const num11 = Number('5.2'); //JS não faz diferenciacao de int, float etc
console.log(num10 + num11); 
console.log(typeof num11);

