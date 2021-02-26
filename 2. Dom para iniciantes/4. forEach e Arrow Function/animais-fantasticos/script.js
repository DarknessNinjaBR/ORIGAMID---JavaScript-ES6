//forEach e Arrow Function
console.log('----------forEach e Arrow Function----------');
//forEach
//Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos com os mesmos é utilizando o método forEach
const imgs = document.querySelectorAll('img');
imgs.forEach(function(item){
    console.log(item);
});
//Parametros do forEach
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual(normalmente chamado de 'item' ou o nome do array no singular, mas pode ser qualquer nome), index e array
imgs.forEach(function(valorAtual, index, array){
    console.log(valorAtual);
    console.log(index);
    console.log(array);
});

//forEach e Array
console.log('----------forEach e Array----------');
//forEach é um método de Array, alguns objetos array-like possuem esse método. Caso não possua, o ideal é transformá-los em um Array
const titulos = document.getElementsByClassName('titulo'); //Retorna um HTMLCollection, um array like que não possui o método forEach
const titulosArray = Array.from(titulos); //Transforma o HTMLCollection em um array
//Agora é possível usar o forEach
titulosArray.forEach(function(item){
    console.log(item);
});
console.log(titulos); //HTMLCollection
console.log(titulosArray); //Array normal

//Arrow Function
console.log('----------Arrow Function----------');
//Sintaxe curta em relação a 'function expression'. Basta remover a palavra chave 'function' e adicionar a fat arrow '=>' após os argumentos
imgs.forEach((item) => {
    console.log(item);
});
//Com apenas um argumento, não precisa dos parenteses
imgs.forEach(item => {
    console.log(item);
}); 

//Multiplos argumentos requerem o parenteses
imgs.forEach((item, index) => {
    console.log(item, index);
});

//Sem argumentos, usa-se o parenteses vazio
let i = 0
imgs.forEach(() => {
    console.log(i++);
    console.log('looping');
});
//Se houver apenas um retorno, pode ser feito em apenas uma linha, não pode fechar com ;
let x = 0
imgs.forEach(() => console.log(x++));




//Exercício
console.log('----------Exercício----------');
//Monstre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p');
paragrafo.forEach((item) => console.log(item));

//Mostre o texto dos parágrafos no console
paragrafo.forEach((item) => console.log(item.innerText));

//Como corrigir os erros abaixo:
const imgsA = document.querySelectorAll('img');/*
imgsA.forEach(item, index => {
    console.log(item, index);
});

let a = 0;
imgsA.forEach( => {
    console.log(a++);
});

imgs.forEach(() => a++)*/
//Resposta
imgsA.forEach((item, index) => {
    console.log(item, index);
});

let a = 0;
imgsA.forEach(() => console.log(a++));

imgs.forEach(() => a++);
