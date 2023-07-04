
//------ALERT
alert('Com a nossa mensagem.'); //sempre quando colocamos parenteses estamos chamando uma função que executa algo
//alert, confirm, e prompt
//temos no navegador o pai de todos os elementos o elemento WINDOW e o alert está dentro desse objeto WINDOW - no console.log estamos chamando o metodo log que está dentro do objeto console
//alert é um atalho do <window.alert()> assim como console.log
//boleano utilizado para desviar o fluxo

//------CONFIRM -> retorna um booleano -> posso capturar
confirm('Deseja realmente apagar?');
window.confirm("Os ou Cancel?");
const confirma = confirm('realmente deseja apagar?'); //capturou o valor inserido em um lugar na memória
let confirma2 = confirm('qualquer mensagem');

//------PROMPT (quando uma função está dentro do objeto chamamos de método)
prompt("Digito a minha mensagem");
let num56 = prompt('digite um número:'); // na função PROMPT ele sempre retorna como STRING
num1 = parseFloat(num56);

let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro número');
//document.write(typeof num2);
num1 = parseFloat(num1);
num2 = Number(num2);
//document.write('A soma desses dois números é:', num1+num2);
//const resultado = num1+num2;
alert(`meteulhe a crase menor: ${num1+num2}`);
//-----CODIGO explicito quando você mostra claramente o que quer fazer, voce vai entender melhor no futuro e o seu time também, lembrando que escrevemos codigos para humanos e nao para o computador;