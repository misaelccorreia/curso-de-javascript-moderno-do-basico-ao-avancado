//-voce pode imaginar um array como uma lista de coisas
const alunas = ['Luiz', 'Maria', 'Joao', 1, true, null]; //tentamos colocar apenas um tipo de dado em uma lista, mas o javascript nao restringe
console.log(alunas);
//sabemos que as strings são indexnadas, 012345... O array é indexado por elemento) 
const alunos = ['Luiz','Maria','João'];
console.log(alunos);
console.log(alunos[2]);
alunos[0]= 'Eduardo'
console.log(alunos);
alunos[3] = 'Luiza';
console.log(alunos)
console.log(alunos.length);
//--funcao para colocar o elemento ao final do array
alunos.push('Luiza');//ADICIONA NO FINAL
alunos.push('Fabio');
console.log(alunos);
//--funcao para colocar o elemento no começo (nao da pra colocar indice negativo, ele tem que jogar pro lado o dado atual)
alunos.unshift('Louise');// ADICIONA NO COMEÇO
alunos.unshift('Binho');
console.log(alunos);
//--remover elementos do array
alunos.pop();//ELIMINA o ULTIMO ELEMENTO, e da pra adicionar em uma variável
const removidoFinal = alunos.pop()
console.log(alunos)
const removidoInnicio = alunos.shift()
//--remover sem mudar os indices de lugar, posso apagar o elemento DELETE
delete alunos[2];
console.log(alunos);
//- no java script eu posso acessar um lugar na memoria que nao existe no array, se selecionar ele vira um undefined
alunos[2] = 'Maria';
console.log(alunos);
//-FATEAR ARRAY funcao
console.log(alunos.slice(2,4));//positivo com o range
console.log(alunos.slice(0,-2));//negativo ele vai usar o tamanho do array menos o negativo NAO ENTENDI DIREITO
//em JS o meu Array pode receber um numero, ou uma string e parar de ser um array '-'
console.log(alunos instanceof Array); // é array?
//quando alteramos o valor interno de um objeto nao ocorre o sinal de atribuicao = logo a variável continua apontando para o mesmo lugar na memória
//Objetos mutáveis ARRAYS e OBJECTS
/*Isso pode:
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
Isso NÃO pode:
const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
*/