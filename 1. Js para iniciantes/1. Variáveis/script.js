//Exemplo 1

//Cria a variável
var nome = 'Pedrão das Quebrada';
var idade = 28;
var possuiFaculdade = true;
//exibe no console
console.log(nome);
console.log(idade);
console.log(possuiFaculdade);

console.log(nome, idade, possuiFaculdade);


//Exemplo 2
var preco = 7;
var quantidadeComprada = 3;
//variável composta de duas outras variaveis, nesse caso, o valor será a multiplicação de "preco" com a "quantidadeComprada"
var totalCompra = preco * quantidadeComprada;

console.log(totalCompra);

//Exemplo 3
//Com apenas um var, e virgula para separar, é possivel criar várias variáveis sem ter que repetir a preposição
var sobrenome = "Gomes",
    cidade = "Capiva de Baixo";

console.log(sobrenome, cidade);

//Exemplo 4

//Variável vazia, em javascript, chamada de undefinied
var variavelVazia;
console.log(variavelVazia);

//Exemplo 4

//É possivel sobrescrever uma variável, apenas dizendo a ela qual será seu novo valor
var comida = 'peixe';
//sobrescrevendo a variável \/
comida = 'macarrão';

console.log(comida);

var comida2 = 'feijão';
console.log(comida2);
comida2 = 'arroz';
console.log(comida2);

//Exemplo 5

//Existem 3 formas de declarar uma váriavel, com var, let e const, sendo const uma constante, logo, seu valor não pode ser alterado após ser declarada
/*
var idade = 28;
//sobrescrevendo
idade = 29;

let preco = 40;
//sobrescrevendo
preco = 35;

const possuiFaculdade = true;
//como não é possivel reescrever uma variável const, a linha abaixo retornará um erro
possuiFaculdade = false;
*/




//Exercício

//Declarar uma variável com seu nome
var nome = 'Pedro';
//Declarar uma variável com sua idade
var idade = 18;
//Declarar uma variável com a sua comida favorita e não atribuir valor
var comidaFavorita;
//Atribuir valor a sua comida Favorita
comidaFavorita = 'Yakisoba';
//Declarar 5 váriaveis diferentes sem valores
var semvalor1,
    semvalor2,
    semvalor3,
    semvalor4,
    semvalor5;