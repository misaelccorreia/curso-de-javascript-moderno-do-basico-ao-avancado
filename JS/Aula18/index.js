 //básico do básico de objetos
const pessoaA = {
  nome: 'Luiz',
  sobrenome:'Miranda',
  idade:25
};//tenho uma pessoa que tem um atributo dentro dela
const pessoaB = {
  nome: 'Maria',
  sobrenome:'Oliveira',
  idade:55
};
//Para acessar esse atributo:
console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaB.idade);
//--posso criar uma funcao para criar esses objetos FUNCAO CRIA OBJETOS
function criaPessoaX(nome, sobrenome, idade){
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}
const pessoaX = criaPessoaX('Suelen','Otavina',35); //argumento que vai ser passado para o parãmetro na funcao, argumento é o valor que é passado para o parametro
console.log(pessoaX.nome);
const pessoa2 = criaPessoaX('Junior','Yil',25);
const pessoa3 = criaPessoaX('Meredite','Og',45);
const pessoa4 = criaPessoaX('Jhenifer','Tanaka',77);
const pessoa5 = criaPessoaX('Willian','Bich',8);
//--forma abreviada subentendida pelo javascript
function criaPessoa(nome, sobrenome, idade){return{nome, sobrenome,idade};}
//--
const pessoaNEGO ={
  nome:'Luiz',
  sobrenome: 'Miranda',
  idade:25,

  fala(){
    console.log('Olá mundo!');
  }
};//metodo fala, funcoes e metodos executam acoes
pessoaNEGO.fala();
//--nessse contexto dentro do objeto THIS representa esse objeto
const pessoaNegoBlu = {
  nome:'Norberto',
  sobrenome: 'Miranda',
  idade:25,

  fala(){
    console.log(`A minha idade atual é ${this.idade}`);
  }
  ,
  incrementaIdade() {
    this.idade++;
  }
};//metodo fala, funcoes e metodos executam acoes
pessoaNegoBlu.fala();
pessoaNegoBlu.incrementaIdade();
pessoaNegoBlu.fala();
pessoaNegoBlu.incrementaIdade();
pessoaNegoBlu.fala();
pessoaNegoBlu.incrementaIdade();
pessoaNegoBlu.fala();
console.log(pessoaNegoBlu);
//O coração do JAVASCRIPT é FUNÇÃO & OBJETO
