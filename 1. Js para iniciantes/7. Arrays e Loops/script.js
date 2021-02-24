//Arrays e Loops
//Array é um grupo de valores, servem para guardar diferentes valores em uma única variável, é identificado pelo []
var consoles = ['Switch', 'PS4', 'XONE'];
consoles[0]; // Switch
consoles[2]; // XONE
console.log(consoles);
//Para acessar um array, se usa nomeDoArray[posição], como no exemplo acima, inicando a posição por 0

//Métodos e propriedades de um Array
//pop() serve para remover o ultimo item de um array e retornar o valor
var ultimoItem = consoles.pop();
console.log(consoles);
console.log(ultimoItem);
//push() adiciona um valor no final do array
consoles.push('3DS');
console.log(consoles); 
//lenght retorna o tamanho do array
console.log(consoles.length); // 3

//For loop
//Faz ações repetidas vezes até que uma condição seja atingida
for (let numero = 0; numero < 10; numero++) {
    console.log(numero);// 0 a 9
}
//let numero = 0; define onde o loop vai iniciar | numero < 10; verifica se o numero atingiu um valor superior ao valor pré definido, se superou, para o loop | numero++; faz o incremento do numero

//While loop
var i = 0;
while (i < 10) {
    console.log(i);// 0 a 9
    i++;
}

//Arrays e loops
//Usa o .length como o numero de repetições a ser atingido pelo loop
var consolesL = ['Switch', 'PS4', 'XONE', '3DS'];
for (let i = 0; i < consolesL.length; i++) {
    console.log(consolesL[i]);
}
//Se usa a palavra 'break' para interromper um loop
for (let i = 0; i < consolesL.length; i++) {
    console.log(i);
    console.log(consolesL[i]);
    if(consoles[i] === "PS4"){
        break;
    }
}

//forEach
//Loop mais simples que o for e tambem mais utilizado, nele não é necessário o incremento de um index, já que é feito dinamicamente
consolesL.forEach(function (consoleL, index) {
    console.log(consoleL, index);
})




//Exercícios

//Crie um array com os anos em que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002
var brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];

//Interaja com o array utilizando um loop para mostrar no console a seguinte mensagem 'O brasil ganhou a copa de ${ano}'
for (let i = 0; i < brasilCampeao.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

//Coloque a última fruta no array acima em uma variável, sem remover a mesma do array
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);