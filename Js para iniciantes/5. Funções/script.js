//Funções
//Funções são como formas, de onde você consegue extrair um produto, como vários bolos saindo de uma mesma forma, porém, com sabores diferentes, nas funções você pode escrever o quanto de codigo quiser para que ela realize alguma operação, o que identifica uma função são os () no final dela e também, é ele que as executa

//Calcula a Área de um quadrado
function areaQuadrado (lado) {
    return lado * lado;
}
//exibe o resultado que retorna da função
console.log(areaQuadrado(14));

function pi (){
    return 3.14;
}
console.log(5 * pi());
//Sem o parentêses ele retorna a função em si, não a executando mas exibindo a função em escrito
console.log(pi);

//Parâmetros e Argumentos
//peso e altura são parâmetros
function imc(peso, altura){
    var imc = peso / (altura ** 2);
    return imc;
}
//80 e 1.8 são argumentos
console.log(imc(80, 1.80));

//Dependendo da função, não é necessário passar um argumento
function corFavorita(cor){
    if(cor == "azul"){
        return 'Você gosta do céu';
    }else if (cor == "verde"){
        return 'Você gosta de plantas';
    }else{
        return 'Você não gosta de nada';
    }
}
//Retorna o else
console.log(corFavorita());

//Argumentos podem ser funções
addEventListener('click', function(){
    console.log('clicou');
});
//ou
function cliqueMouse(){
    console.log('clicou');
}
addEventListener('click', cliqueMouse);

//Uma função pode ou não retornar um valor
function imc2(peso, altura) {
    var imc = peso / (altura ** 2);
    console.log(imc);
}
//executa a função,e como dentro dela tem um console.log, ele tambem executa esse comando e então o valor é exibido
imc2(50, 1.6);
//retorna o console.log dentro da função. e undefinied, já que a função em si não possui return, logo ela não possui valor algum
console.log(imc2(50, 1.6));

//Qualquer tipo de valor pode ser retornado por uma função
//ATENÇÃO: a função a baixo é um exemplo, nunca deve-se retornar diferentes tipos de dados de uma função, como abaixo que pode retornar booleana ou string, nesse caso, o correto é retornar apenas string ou apenas a booleana!
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe sua idade';
    }else if (idade >= 60){
        return true;
    }else{
        return false;
    }
}
console.log(terceiraIdade(60))

//Os parâmetros de uma função, variáveis ou funções criadas dentro delas são locais, pertencem apenas a função, se você tentar acessa-las fora da função, o script irá dizer que a variável não existe
function precisoVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Ainda faltam visitar ${totalPaises - paisesVisitados} países`;
}
/*console.log(totalPaises); //retorna -> Uncaught ReferenceError: totalPaises is not defined */
//Mas é possivel usar variáveis e funções que estejam fora da função, ou seja, sempre de fora pra dentro, nunca o contrário
var totalPaisesv2 = 193;
function precisoVisitarv2(paisesVisitadosv2){
    return `Ainda faltam visitar ${totalPaisesv2 - paisesVisitadosv2} países`;
}
console.log(totalPaisesv2);




//Exercícios

//Crie uma função para verificar se um valor é Truthy
function verificarValor(valor){
    return !!valor
}
var valor = true;
console.log(verificarValor(valor));

//Crie uma função matemática que retorna o perímetro de um quadrado.
function calcularPerimetro(lado){
    var resultado = lado * 4;
    return resultado;
}
console.log(calcularPerimetro(4));

//Crie uma função que retorne seu nome completo, ela deve possuir os parâmetros: nome, sobrenome
function nomeComleto(nome, sobrenome){
    var resultNomeCompleto = nome + " " + sobrenome;
    return resultNomeCompleto;
}
console.log(nomeComleto('Pedro', 'Gomes Antunes'));

//Crie uma função que verifica se um número é par
function verificaNumero(numero){
    var sobra = numero % 2;
    if(sobra === 0){
        return `O número ${numero} é par`;
    }else{
        return `O número ${numero} é impar`;
    }
}
console.log(verificaNumero(2));

//Crie uma função que retorne o tipo de dado do argumento passado nela
function tipoDado(dado){
    return typeof(dado);
}
console.log(tipoDado('isto é uma string'));

//addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'click' acontecer
addEventListener('click', function() {
    console.log('Pedro Gomes Antunes');
});

//Corrija o erro abaixo
/*
function precisoVisitarE(paisesVisitadosE)
{
    var totalPaisesE = 193;
    return `Ainda faltam visitar ${totalPaisesE - paisesVisitadosE} países`;
}
function jaVisiteiE (paisesVisitadosE){
    return `Já visitei ${paisesVisitadosE} do total de ${totalPaisesE} países`;
}
precisoVisitarE(20);
jaVisiteiE(20);
*/
var totalPaisesE = 193;
function precisoVisitarE(paisesVisitadosE)
{
    return `Ainda faltam visitar ${totalPaisesE - paisesVisitadosE} países`;
}
function jaVisiteiE (paisesVisitadosE){
    return `Já visitei ${paisesVisitadosE} do total de ${totalPaisesE} países`;
}
precisoVisitarE(20);
jaVisiteiE(20);