/*-----EXPLICAÇÃO
  const numero = Number(prompt("Digite um número:"));
  //let numero = prompt("Digite um número:"); //prompt sempre retorna uma string
  //numero = Number(numero); //seria o outro modo tradicional
  const numeroTitulo = document.getElementById('numero-titulo');
  const texto = document.getElementById('texto');
  //da pra selecionar pelas tags no css, mas vamos fazer isso posteriormente, essa funcionalidade ainda funciona muito bem
  numeroTitulo.innerHTML = numero;
  texto.innerHTML = `<p>Seu número +2 é ${numero+2} </p>`;
--------FIM EXPLICACAO*/
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;
//----
//const q1 = document.getElementById('q1');
//q1.innerHTML = `<p>Raiz quadrada: ${numero}</p>`;
q1.innerHTML=`<p>Raiz quadrada: ${numero ** (1/2)}`; //deve ter sido por seleção do css
q2.innerHTML=`<p>${numero} é inteiro: ${Number.isInteger(numero)}`;
q3.innerHTML=`<p>É NaN: ${Number.isNaN(numero)}`;
q4.innerHTML=`<p>Arredondado para Baixo: ${Math.floor(numero)}`;
q5.innerHTML=`<p>Arredondado para Cima: ${Math.ceil(numero)}`;
q6.innerHTML=`<p>Com duas casas decimais: ${numero.toFixed(2)}`;