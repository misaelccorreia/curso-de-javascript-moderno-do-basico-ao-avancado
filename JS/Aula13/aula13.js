let umaString = 'Um texto';
//o JS já me disponibiliza algumas funcoes para trabalharmos com strings
let umaString2 = "Um \"texto\""; //utilizamos a barra invertida como caractere de escape
// a barra invertida é o escape dentro do texto.
//-strings são indexadas, ou seja podemos iterar sobre ele (cada caractere tem um indice ou seja temos 01234567 para os 8 caracteres no "Um texto")
console.log(umaString[4]); // fora do range do indice, fica undefined
//outra forma de pegar esse indice é que o JAVASCRIPT me permite com um ponto "." ele vai me dar várias opções, como: 
console.log(umaString.charAt[6]);
console.log(umaString.concat(' ', 'em', ' ', 'lindo dia.'));
console.log(umaString+' ', 'em', ' ', 'lindo dia.');
console.log(`${umaString} em um lindo dia`)//esse é o TEMPLATE STRING -> concatenação
//quero saber em que indice da string está determindada palavra?
console.log(umaString.indexOf('texto')); 
//posso tambem mandar a partide de conde ele começa por exemplo a letra t a partir do indice 5
console.log(umaString.indexOf('t',5)); 
console.log(umaString.lastIndexOf('m',3)); //mas ele começa de trás para frente
//----referentes a expressões regulares, <match>, <search> e <replace>
console.log(umaString.match(/[a-z]/g));//essa expressão regular requeriria um curso específico só para isso, essa retorna as minúsculas
console.log(umaString.search(/x/));// retorna o indice onde foi encontrado, parecido com o indexOf (retorna o indice), mas aceita expressões regulares
console.log(umaString.replace('Um', 'OUTRA'));
//                0123456789... indices, eles continuam 10, 11, 12 até o final
let umaString3 = "O rato roeu a roupa do rei de roma.";
console.log(umaString3.replace(/r/g, "#"));
console.log(umaString3.length);//length retorna exatamente o tamanho, mas o index começa a parti de 0 seria de 0-34 length é tamanho
//-para fatear uma string
console.log(umaString3.slice(2,6)); //uma espécie de recortar, se usado negativo começa contando de trás pra frente.
console.log(umaString3.slice(-3));
console.log(umaString3.slice(32));
console.log(umaString3.length -3);
//podemos dividir também essa string baseada em um caractere qualquer utilizando SPLIT
console.log(umaString3.split('r')); //ou tambem que aconteça só algumas vezes
console.log(umaString3.split('r', 3));
//para Upercaec
//###console.log(umaString3.toUpperCase());
//para Lower case -> letras minusculas:
//###console.log(umaString3.toLowerCase());