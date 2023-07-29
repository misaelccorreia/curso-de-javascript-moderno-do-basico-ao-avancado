//---objeto MATH
let num1 = 9.53578;
//como deixar o número inteiro?cirando uma nova variavel
let num2 = Math.floor(num1); //arredondar para baixo
console.log(num2);
num2 = Math.ceil(num1); //arredondar para cima
console.log(num2);
num2 = Math.round(num2)// como é uma funcao, voce passa um parametro para retornar um numero (arredonda de acordo com o decimal)
console.log("arredondado pelos decimais",num2);
//-Math.max e Max.min
console.log("max", Math.max(1,3,45,5435,-98, 33))
console.log("min", Math.min(1,3,45,5435,-98, 33))
//---gerar um número aleatório
const aleatorio = Math.round(Math.random() * (10 - 5)+5);
console.log(aleatorio);
//-UTILIZANDO A MATEMATICA PARA PEGAR A RAI QUADRADA
let num01 = 9; 
console.log(num01 ** (1/5));// os dois asteriscos ** é elevar na matemática
//-atencao no JAVASCRIPT, divisao por 0 nao da erro retorna 'true'
console.log(100/0.00000000000000000000001); // quanto mais proximo de 0 maior o número
console.log(100/0);// return Infinity