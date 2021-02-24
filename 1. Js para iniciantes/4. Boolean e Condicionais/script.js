//Boolean
//Tipo de dado que retorna "true" ou "false", sendo ambos palavras reservadas, true sendo equivalente ao numero 1 e false o numero 0
var possuiGraduacao = true;
//if(ou "se") é uma condicional de verificação, onde, baseado em seu operador, verifica se uma ou mais variáveis correspondem respectivamente aos operadores, retornando verdadeiro ou falso. Else equivale ao "senão", caso o if nao seja verdadeiro, ele ignora tudo que esta dentro dele e executa o que estiver dentro do senão, o else não é obrigatório, nem todo if precisar ter else
if(possuiGraduacao){
    console.log("Verdadeiro");
    x = 15;
}else{
    console.log("Falso");
}
console.log(x);
//else if, se quivale ao "senão, se" caso o if retorne falso, ele verifica o else if da próxima linha, podendo fazer quantas verificações quiser
var possuiDoutorado = false;
possuiGraduacao = true;
if(possuiDoutorado){
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao){
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('não possui graduação');
}

//Truthy ou Falsy
//Valores que retornal false, todo o resto retorna verdadeiro
//Falsy
if(false){}
if(0){} //ou -0
if(NaN){}
if(null){}
if(undefined){}
if(''){} //ou "" ou ``
//Com o operador "!", ele faz uma verificação inversa, se era para saber se algp era verdadeiro, com o !, isso muda para verificar se algo é falso
//Truthy
if(!true){} //false
if(!1){} //false
if(!''){} //true
if(!undefined){} 
if(!!' '){} //true
if(!!''){} //false
//Exemplo 1
//se, 'não' possui graduação, execute as linhas dentro da chave(  '{}'  )
possuiGraduacao = false;
if(!possuiGraduacao){
    console.log('Não possui graduação');
}

//Operadores de comparação
//> é o operador que verifica se o valor é maior do que o outro
10 > 5; //true
5 > 10 //false
//< é o operador que verifica se o valor é menor do que o outro
20 < 10 //false
//< é o operador que verifica se o valor é menor ou igual ao outro
10 <= 10 //true
//< é o operador que verifica se o valor é maior ou igual ao outro
10 >= 11 //false

//'==' verifica se o valor é identico ao comparado, e o '===' para se tipo de dado e o valor é identico ao comparado
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //false
10 != 15; //true
10 != '10'; //false
10 !== 10; //true

//'&&' ou 'e', compara uma expressão e as outras, se a primeira expressão retornar verdadeiro, ele continua verificando a demais, se achar falso, ele retorna esse valor e para de verificar o resto
true && true; //true
false && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão'
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true

//'||' ou 'ou', compara uma expressão ou as outras, se a primeira expressão retornar falso, ele continua verificando a demais, ele termina a verificação caso qualquer um dois valores for true
true || true; //true
true || false; //true
false || true; //false
'Gato' || 'Cão'; //'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false; //'Gato'
(5 >= 5) || (3 < 6); //true

//Switch
//Verifica se uma variável é igual a diferentes valores usando o 'case', parecido com o if, se for verdadeiro, ele executa o código, e com o 'break' ele finaliza a execução e as demais verificações. O 'default' serve para, caso todas as outras verificações falhem, ele execute aquela por padrão
//Exemplo1
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
            console.log('Olhe para o sol. (é recomendado fazer isso usando óculos)');
            break;
    default:
        console.log('Feche os olhos');
        break;
}




//Exercício

//Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É maior'.
var minhaIdade = 18;
var idadeSobrinho = 8;

if(minhaIdade === idadeSobrinho){
    console.log('É igual');
}else if(minhaIdade > idadeSobrinho){
    console.log('É maior');
}else{
    console.log('É menor');
}

//Qual valor é retornado na seguinte expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //retorna 3

//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'André'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil e China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil > china){
    console.log('Brasil tem mais habitantes');
}else{
    console.log('Brasil tem menos habitantes');
}

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
//Falso

//O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
}else{
    console.log('Falso');
}
//Cão