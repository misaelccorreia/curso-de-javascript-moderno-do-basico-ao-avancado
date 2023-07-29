//--valores primitivos e valores por referêcia
//string é imutável, observe o seguinte exemplo:
let nome = 'Julia';
nome[0] = 'R'; //esse trecho nao altera nada
console.log(nome[0], nome); //a string mesmo que indexada, não pode ter alteração parcial de seus indices.
/* 
Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável): array, object, function
*/
let x = 'A';
let y = x; //CÓPIA - valor primitivo é copiado
console.log(x,y);//  A A 
x = 'Outra coisa'; //alterando valor de a, não altero a variável em nada
console.log(x,y); // Outra coisa A 
//--
let a = [1, 2, 3];
d = [...a];//"cópia por espalhamento" ou "cópia por spread"
let b = a; //APONTA PARA O MESMO LUGAR NA MEMÓRIA - valor primitivo é passado por referência
let c = b;
console.log(a,b); // [1, 2, 3] [1, 2, 3]
a.push(4,5); //alterei o valor na memória
console.log(a,b);
b.pop();
console.log(b);
console.log(a);// a & b foram afetados por esse lugar
console.log(c); //mesmo as outras que receberem um valor passado por referencia apontara para o mesmo lugar, SE CASO EU QUEIRA COPIAR teria que usar outro operador, ou:
console.log(d); // nao sofreu as alterações copiou para o valor
