//-uma funcao retorna uma acao, geralmente voce insere algo e ela retorna algo
function saudacao1(nome)/*parametros*/{
    console.log(`Bom dia ${nome}`);
    return 123456;
}
saudacao1('')/*aqui eu mando um argumeto para o parametro*/;
saudacao1('Falipe');
saudacao1('Maria');
//por hora essa funcao nao retorna valor nenhum, não da pra ser atribuida como valor, ira retonrar undeined ou posso colocar um retorno pra ela.
function saudacao(nome){
  return `Bom dia ${nome}!`;
}
//saudacao('Luiz');
const variavel = saudacao('Sara');
console.log('Como é bom te ver de novo', variavel);
//----
function soma1(x,y){
  const resultado = x + y;
  return resultado;
}
console.log(soma1(3,4));
//- o corpo da funcao nao tem nada haver com o que está fora da funcao, nao da pra acessar o que está dentro do escopo da função:
//console.log(resultado);//isso retorna undefined
/*Posso criar uma variável com o mesmo nome do que esta dentro da funcao por que um nao tem haver com outra *///resultado = 3+31321;
//--RETURN é o encerramento de qualquer funcao nada mais na funcao sera executado.
//cao nao envie parametro
function soma (x = 1, y = 3){
  const resultado = x+y;
  return resultado;
}
const resultado = soma(4);
console.log(resultado);
//eu posso criar uma funcao dentro de uma variavel nesse caso estaria criando uma funcao anonima
const raiz1 = function(n){
  return n**0.5;
};
console.log(raiz1(4));
console.log(raiz1(156));
//Arow Function - NOVA MANEIRA
const raiz = (n) => {
  return n ** 0.5;
};
console.log(raiz(9));
const raizSimplificada = n=> n **0.5;
console.log(raizSimplificada(49));