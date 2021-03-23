//Classes e Atributos
console.log('----------Classes e Atributos----------');
//classList
//Retorna uma lista com as classes do elemento. Permite adicionar, remover, e verificar se contém
const menu = document.querySelector('.menu');
menu.className; //String
menu.classList; //Lista de classes
menu.classList.add('ativo'); //Adiciona a classe "ativo"
menu.classList.add('ativo', 'mobile'); // Adiciona duas classes, nesse exemplo: "ativo" e "mobile"
menu.classList.remove('ativo'); //Remove a classe
menu.classList.toggle('ativo'); //Adiciona/remove a classe
menu.classList.contains('ativo') //Retorna Boolean
menu.classList.replace('ativo', 'inativo'); //Substitui os nomes das classes
//Ex
if(menu.classList.contains('mobile')){
    menu.classList.remove('inativo');
    menu.classList.add('ativo');
}
//Forma antiga
menu.className += ' positivo'; //Adiciona a classe "Positivo" e mantém as antigas
console.log(menu.className); //menu mobile ativo positivo
menu.className = 'menu'; //Sobrepõe todas as outras classes, assim as removendo e adicionando a classe menu
console.log(menu.className); //menu

//attributes
console.log('----------attributes----------');
//Retorna uma array-ike com os atributos do elemento.
const animais = document.querySelector('.animais');
console.log(animais.attributes); //Retorna todos os atributos
console.log(animais.attributes[0]); //Retorna o primeiro atributo, nesse caso, class
//Para não ter que saber ou chutar a ordem dos atributos, é possivel chama-las como objeto
console.log(animais.attributes.class); //class="grid-section animais"
console.log(animais.attributes.id); //id="animais"
//Para atributos com ífem, chama-se como se fosse um array, mas com uma string no colchete
console.log(animais.attributes['data-texto']); //data-texto="teste"

//getAttribute e setAttribute
console.log('----------getAttribute e setAttribute----------');
//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
console.log(img.getAttribute('src')); //Valor do src da img
img.setAttribute('alt', 'Texto Alternativo'); //Altera o valor de 'alt'
console.log(img.hasAttribute('id')); //Verifica se o elemento tem id, retornando uma Booleana
img.removeAttribute('alt'); //Remove alt do elemento
console.log(img.hasAttributes()); //Boolean se houver algum atributo

//Read Only vs Writable
console.log('----------Read Only vs Writable----------');
//Read Only ou "apenas leitura" sáo propriedades que não permitem a alteração de seus dados, já Writable, ou "escrevivel?" permite as alterações, como no exemplo abaixo
const animaisRW = document.querySelector('.animais');
console.log(animaisRW); 
animaisRW.className; //string com o nome das classes
animaisRW.className = "azul"; //Substitui a string (Writable)
animaisRW.className += " vermelho"; //Adiciona vermelho a string (Writable)
animaisRW.className = "grid-section animais"; //Substitui a string (Writable)
animaisRW.attributes = 'class="ativo"'; //Não funciona, não adiciona nem reescreve os valores (Read Only)
//Para saber se algo é Read Only ou Writable sem testar, basta ver a documentação




//Exercício
console.log('----------Exercício----------');
//Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

//Remove a classe ativo de todos os itens do menu e manhenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

//Verifique se as imagens possuem o atributo alt
const imgA = document.querySelectorAll('img');
imgA.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(item, possuiAtributo);
});

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);