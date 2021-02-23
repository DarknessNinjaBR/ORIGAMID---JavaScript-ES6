//Escopo
//Escopo evita o conflito entre nomes

//Escopo de Função
//Variáveis declaradas dentro de funções não podem ser acessadas fora delas
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}
mostrarCarro(); //Exibe 'Fusca' no console
//console.log(carro); // Erro, carro is not defined

//Escopo de Bloco
//Vatiáveis criadas com var, vazam do bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é usando const e let, pois estas respeitam o escopo de bloco
if (true){
    var carro = 'Uno';
    console.log(carro);
}
console.log(carro);

if (true){
    let mes = 'Fevereiro';
    const feriado = 'Natal';
    console.log(mes);
    console.log(feriado);

}
//console.log(mes); // mes is not defined
//console.log(feriado); // feriado is not defined
//
//Mesmo o if retornando falso, a variável ainda vaza, resultando em 'undefined'
if (false){
    var semana = 'Sábado';
    console.log(semana);
}
console.log(semana); // undefined

//{} cria um bloco, mas não confundir com a criação de objeto = {}
{
    var escopoVazou = true;
    const escopoFicou = true;
}
console.log(escopoVazou);
//console.log(escopoFicou); // escopoFicou is not defined

//Escopo em For loop
//Evitar vazar variável para não ocorrer erros futuros
for (let k = 0; k < 5; k++) {
    console.log(k);
}
//console.log(k); // k is not defined, k não vazou

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); //5, i vazou

//Const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação de um valor da variável, evitando bugs no código, além de não poder ser declarada se for vazia
const mes = 'Fevereiro';
//mes = 'Março'; // erro, tentou modificar o valor - Assignment to constant variable.
//const dia; //erro, declarou sem valor - Missing initializer in const declaration
const data = {
    dia: 22,
    mes: 'Fevereiro',
    ano: 2021
}
data.dia = 23; // Funciona
//data = 'Março'; // erro - Assignment to constant variable.

//Let
//Mantém o escopo no bloco, impede a redeclaração mas permite a modificação de um valor da variável

let ano;
ano = 2020;
ano++;
console.log(ano); // 2021
//let ano = 2023; // erro - dentifier 'ano' has already been declared




//Exercícios

//Por qual motivo o código abaixo retorna um erro?
/*{
    var cor = 'preto';
    const marca = 'Fiat';
    let = portas = 4;
}
console.log(var,marca,portas);
*/
//Porque var não é o nome de uma variável, e o código está tentando acessar variáveis let e const que estão dentro de um escopo
{
    var cor = 'preto';
    const marca = 'Fiat';
    let = portas = 4;
    console.log(cor,marca,portas);
}

//Como corrigir o erro abaixo?
/*
function somarDois(x) {
    const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}   
somarDois(4);
dividirDois(6);*/
//Botando a variável 'dois' fora da função
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}   
somarDois(4);
dividirDois(6);

//O que fazer para retornar 500?
/*var numero = 50;
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
const total = 10 * numero;
console.log(total);//100*/
var numero = 50;
for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}
const total = 10 * numero;
console.log(total);//500
