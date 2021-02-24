//Objetos
//Objeto é um conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
    nome: 'Pedro',
    idade: 18
}
pessoa.nome
//this se refere ao próprio objeto, ali, ele está pegando um valor que existe dentro dele mesmo para colocar dentro da função
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    }
};
//ou
var quadrado = {
    lados: 4,
    area (lado) {
        return lado * lado;
    },
    perimetro (lado) {
        return this.lados * lado;
    }
};
console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25
console.log(quadrado.perimetro(5)); //20
//Objetos servem para organizar os códigos em pequenas partes

//O próprio Javascript tem objetos pré definidos
Math.PI; //3.14
Math.random(); //número aleatório de 0 a 1 

//Criar um Objeto
//É criado usando as chaves {}
var carro = {};
console.log(typeof(carro)); // 'object'

//Dot Notation Get
//Para acessar as propriedades em um objeto, deve-se utilizar o ponto '.'
var menu = {
    width: 800,
    height: 100,
    color: '#84E'
};
//Também é possivel atribuir propriedades de um objeto em variáveis e vice-versa
var bg = menu.color;
console.log(bg);
menu.color = '#000';
console.log(menu.color);

//Dot Notation Set
//Pode se adicionar novas propriedades
console.log(menu);
menu.backgroundColor = '#fff';
console.log(menu);
menu.esconder = function (){
    console.log('escondido');
};
console.log(menu);

//Protótipo e Herança
//O Js usa uma função para desenvolver os Objetos, logo, ele acaba por herdar funções desse objeto 'pai'
//Para verificarmos se uma propriedade foi criada no objeto, ou herdade desse objeto pai, usamos o 'hasOwnProperty'
console.log(menu.hasOwnProperty('color')); // true
console.log(menu.hasOwnProperty('hasOwnProperty')); // false
//o próprio metodo hasOwnProperty é um método herdado




//Exercícios

//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Pedro',
    sobrenome: 'Gomes Antunes',
    idade: 18,
    cidade: 'Capivari de Baixo',
    estudo: 'Ensino médio técnico completo',
    profissao: 'Programador e Game Developer'
}

//Crie um método no objeto anterior, que mostre seu nome completo
dados.nomeCompleto = function () {
    nomeCompleto = `${this.nome} ${this.sobrenome}`;
    console.log(nomeCompleto);
    return nomeCompleto;
}
dados.nomeCompleto();

//Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
console.log(carro); //1000
carro.preco = 3000;
console.log(carro); // 3000

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    idade: 10,
    cor: 'preto',
    latir(pessoa){
        if(pessoa === 'homem'){
            return true;
        }else{
            return false;
        }
    }
};
console.log(cachorro);