//vNumeros em javascript - certa imprecisão nos números, parece conteúdo avançado
let num1 = 1; //number
let num2 = 2.5; //number
let num64 = 1;
console.log(num1.toString() + num2); //aqui não estou mudando só retornando aqui com o string a variável continua sendo number em outros lugares no codigo
console.log(typeof num64); // não foi alterado, continua sendo, para alterar para sempre teria que:
num64 = num64.toString();
console.log(typeof num64);
//-toFixed()
console.log(num1.toFixed(4)); //colocando com 4 casas decimais, apenas para mostrar no console, nao altera, para alterar a variável tem que receber a alteração.
//-Number.isInteger(num1)
console.log(Number.isInteger(num1));
let temp = num1 * 'Ola'; 
//como saber se esse numero é um numero inteiro em js
console.log(Number.isInteger(num1));//vai retornar um bolean
//NaN
console.log(Number.isNaN(temp));
let temp2 = num1 * '5'; //nao e uma boa pratica mais ele vai fazer funcionar NAO FACA CONTAS COM STRINGS -> como programador voce deve identificar antes
console.log(temp2);
//IMPRECISÃO do Javascript -> IEEE 745-2008
let numA = 0.7;
let numB =  0.1; //number
console.log(numA+numB); // 0,7999999 -> ja tem uma certa imprecisão aqui.
numA+=numB;
console.log(numA);
//--
let num01 = 0.7;
let num02 = 0.1;

num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
num01+=num02;
console.log(num01);
num01 =Number(num01.toFixed(2));
console.log(num01);
//-utilizando a conta 
let num001 = 0.7;
let num002 = 0.1;
num001 =((num001*100)+(num002*100))/100;
console.log(num001);
num001 =((num001*100)+(num002*100))/100;
num001 =((num001*100)+(num002*100))/100;
console.log(num001);
