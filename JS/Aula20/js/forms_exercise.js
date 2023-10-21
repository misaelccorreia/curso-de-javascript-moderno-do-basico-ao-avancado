function meuEscopo(){
  //com o query selector posso selecionar utilizando o seletor css
  const form  = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];
 
  function recebeEventoForm(evento){
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura'); 
    
    pessoas.push({
      nome: nome.value,s
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  }
  


  //pra pegar o valor do input é nome.value pegar o valor do input
  //pegar nome, sobrenome, peso e altura, criar um objeto e salva ele dentro do array.
  //cada vez que for criado aidicionar um <p> na div resultado. 
  //32:08 PAUSE O VIDEO
  form.addEventListener('submit',recebeEventoForm);
  
}
meuEscopo();

/*
for (var i=0;i<10;i++){
}

*/
console.log(resultado);



//const form = document.getElementById('#form');
/*form.onsubmit =  function(evento){
  evento.preventDefault();
  alert(1);
  console.log("PROFESSOR ");s
}*/
//function recebeEvento(evento){}
