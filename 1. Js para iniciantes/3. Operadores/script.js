//Números
//Para declarar um número, basta inseri-lo sem as aspas ''
var idadeS = '18'; //Isto é uma string(texto)
var idadeN = 18; //Isto é um número
var pi = 3.14; //Ponto para números decimais
var exp = 2e10; //Adiciona dez números zeros após o caractere "E", resultando em: 20000000000;

//Exemplo 1
var numeroGrande = 2e3; //2000
var numeroPequeno = 2e-3; //0.002
console.log(numeroPequeno);

//Operadores Aritméticos
var soma = 14 + 7; //21
var subtracao = 30 - 11; //19
var multiplicacao = 8 * 3; //24
var divisao = 30 / 3; //10
var potencia = 2 ** 3; //8
var modulo = 37 % 5; //2 = Restante da divisão(sobra)

//Operadores dentro de Strings
var somaS = '100' + 50; //10050
var subtracaoS = '100' - 50; //50 como subtração não existe em string, ele tenta converter a string em número, se for possivel, então ele subtrai
var multiplicacaoS = '100' * '2'; //200
var divisaoS = '10' / 2; //5
var divisaoErro = 'Comprei 10' / 2; //NaN (Not a Number) como citado acima, ele tenta converter a string em número, como tem caracteres que não são numeros na string, ele nao consegue converter, retornando o valor "NaN"
//Com a função isNaN() é possivel verificar se uma valor é NaN, retortando verdadeiro ou falso

//Ordem Aritmética
//As operações seguem o mesmo padrão da matemátiva, primeiro potencia/divisão, depois multiplicação/divisão e soma/subtração, podendo também, usar parenteses para piorizar uma expressão
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40

//Operador Unário
//Soma ou Subtrai um valor por 1, usando o "shortcut" ++ ou --
//Exemplo 1
var incremento = 2; //2
console.log(incremento++); //2, já que ele primeiro exibe o valor para depois alterá-lo
console.log(incremento); //3, valor ja alterado
var incremento = 3; //3
console.log(incremento--); //3
console.log(incremento); //2
//ou
var increm2 = 2;
console.log(++increm2); //3, como o operador está na frende do número, ele primeiro faz o calculo, para depois exibir, o contraio do exemplo de antes, onde o operador estava após o número, funciona igual para o --

//Mais Operadores Unários
//Converte o valor da variavel baseado em + e -, como nos exemplos abaixo:
//Exemplo 1
var frase = "teste operador unário"; 
+frase; //NaN
-frase; //NaN

var idade = 18; 
+idade; //18 Retorna número, não uma string
-idade; //-18
console.log(+idade + 5); //23

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1

//Com esse operador, é possivel somar strings sem concatena-las, mas sim, usando matemática
//Exemplo 2
var idadeO = '18';
var somaIdadeO = 3;
console.log(+idadeO + somaIdadeO); //21 (número)
console.log(-idadeO + somaIdadeO); //-15 (número)
console.log(idadeO + somaIdadeO); //183 (string)
idadeO = '18aaasa';
console.log(+idadeO + somaIdadeO); //NaN

//Qual o resultado da seguinte expressão?
var totalExercicio = 10 + 5 * 2 / 2 + 20; 
//Total é 35




//Exercício

//Crie duas expressões que retornem NaN
console.log('10asd' / 30);
console.log('5sfghd' - 30);

//Somar uma string '200' com o número 50 e retornar 250
var string200 = '200';
var numero50 = 50;
var resultadoSomaSN = +string200 + numero50;
console.log(resultadoSomaSN); //250

//Incremente o número 5 e retorne seu valor incrementado
var numero5 = 5;
console.log(++numero5); //6

//Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; //'80kg'
var pesoPorDois = peso / 2; //NaN
//resposta
var somaExercicio = numero /2;
var totalDivisaoExercicio = somaExercicio + unidade; //40lh
console.log(totalDivisaoExercicio);