let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
//--Já tendo os valores inseridos, e não atribuindo valores a essas variáveis (pondendo criar outras se necessário, mude o valor de forma que que o console final escreva B C A)
trans1 = varA;
varA = varB;
varB  = varC;
varC = trans1;
console.log(varA, varB, varC);
//----existe outro formato de fazer isso em javascript:
varA = 'A'; 
varB = 'B';
varC = 'C';
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);