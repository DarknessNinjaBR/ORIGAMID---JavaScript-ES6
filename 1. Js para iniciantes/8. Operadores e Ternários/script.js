//Operadores e Ternários
//Operadores podem funcionar de forma abreviada
var x = 5;
var y = 10;
x += y; // x = x + y (15) 
x -= y; // x = x - y (-5) 
x *= y; // x = x * y (50) 
x %= y; // x = x % y (0.5) 
x **= y; // x = x ** y (9765625) 

//Abreviação de condicionais com if e else
//Exemplo 1
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);
//condição ? true : false
//Exemplo 2
var temDiabete = true;
var podeBeber = (idade >= 18 && temDiabete) ? 'Não pode beber' : 'Pode beber';
console.log(podeBeber);

//Se o if tiver apenas uma linha de código, não é necessários abrir chaves {}
var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui Faculdade'); else console.log('Não possui Faculdade');
//ou
if (possuiFaculdade) 
    console.log('Possui Faculdade');
else
    console.log('Não possui Faculdade');



//Exercícios

//Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

//Atribua true para a cada variável darCredito, caso o cliente possua carro e casa. E false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);
// ou
var darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito' : 'Negar crédito';
console.log(darCredito);
