//ID
console.log('----------ID----------');
//getElementById seleciona e retorna todos os elementos do DOM com a id correspondente
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
console.log(animaisSection);
//Retorna null se não existir
const nullSection = document.getElementById('eu-nao-existo');
console.log(nullSection);

//Classe ou Tag
console.log('----------Classe ou Tag----------');
//getElementsByClassName e getElementsByTagName procuram e retornam uma lista de elementos DOM. A lista retornada está em tempo real, então, se forem adicionados mais elementos, ela será atualizada automáticamente.
//Seleciona pela classe e retorna uma HTMLCollection.
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato'); // Seleciona apenas as que tiverem as duas classes, se houver apenas uma das duas citadas, ela é ignorada.
//Seleciona todas as UL's
const ul = document.getElementsByTagName('ul'); // Procura por todos os elementos HTML que sejam ul's
//Retorna o primeiro elemento
console.log(gridSection[0]);

//Seletor Geral Único - Query Selector
console.log('----------Seletor Geral Único - Query Selector----------');
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animaisQs = document.querySelector('.animais');
const contatoQs = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiraUl = document.querySelector('ul');
const animais = document.querySelector('.animais'); 
console.log(linkCSS);
console.log(animaisQs);
//Busca dentro do ul apenas
const navItem = primeiraUl.querySelector('li')
console.log(navItem);

//Seletor Geral Lista - Query Selector All
console.log('----------Seletor Geral Lista - Query Selector All----------');
//querySelectorAll retorna todos os elementos que combinarem com o seu seletor CSS em uma NodeList
const gridSectionQsA = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais img');
console.log(titulos);
console.log(fotosAnimais);
//Retorna o segundo elemento
console.log(fotosAnimais[1]);

//HTMLCollection vs NodeList
console.log('----------HTMLCollection vs NodeList----------');
//Parecem um array, a diferença está nos metodos e propriedades de ambas. Além disso, a NodeList retornada com o querySelectorAll é estática
const gridSectionHTML = document.getElementsByClassName('grid-section'); //retorna 3 itens
const gridSectionNode = document.querySelectorAll('.grid-section'); //retorna 3 itens
//Adiciona um item grid-section a mais na página
primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML); //retorna 4 itens, já que sua verificação é em tempo real, e ele identificou que foi adicionada uma grid-section nova
console.log(gridSectionNode);  //retorna 3 itens, pois é uma verificação estática
console.log(gridSectionHTML[0]); //retorna <ul class="grid-section">...</ul>
console.log(gridSectionNode[0]); //retorna <section class="grid-section animais" id="animais">...</section>

//Array-Like
console.log('----------Array-Like----------');
//HTMLCollection e NodeList são arrays-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas no NodeList
gridSectionNode.forEach(function(item, index) {
    console.log(index, item);
});
//Transformar Array-Like em Array
const arrayGrid = Array.from(gridSectionHTML); //Agora é possivel usar o forEach
console.log(arrayGrid);
arrayGrid.forEach(function(item){
    console.log(item);
});




//Exercício
console.log('----------Exercício----------');
//Retorne no console todas as imagens do site
const todasAsImgs = document.querySelectorAll('img');
console.log(todasAsImgs);

//Retorne no console apenas as imagens que começaram com a palavra imagem
const todasAsImgsComecoImagem = document.querySelectorAll('[src^="assets/img/imagem"]');
console.log(todasAsImgsComecoImagem);

//Selecione todos os links internos (onde o href começa com #)
const todosLinksInternos = document.querySelectorAll('[href^="#"]');
console.log(todosLinksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2AnimaisDescricao);

//Selecione o ultimo p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);