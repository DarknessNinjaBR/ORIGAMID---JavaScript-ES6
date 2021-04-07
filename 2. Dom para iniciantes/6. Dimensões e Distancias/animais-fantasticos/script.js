window.onload = function() {//serve para apenas executar o código depois que a pagina for carregada
//Dimensões e Distâncias
console.log('----------Dimensões e Distâncias----------');
//Height e Width
//Elementos ReadOnly que são propriedades e métodos Element e HTMLElement, nesse caso, retornando altura e largura
const section = document.querySelector('.animais-lista');   
console.log("CH: ",section.clientHeight); //Altura com padding
console.log("OH: ",section.offsetHeight); //Altura com padding e border 
console.log("SH: ",section.scrollHeight); //Altura total, mesmo dentro do scroll, ou seja, tamanho em si do objeto
//Com a Largura, é a mesma coisa, só trocar o Height por Width
console.log(section.clientWidth); //Largura com padding
console.log(section.offsetWidth); //Largura com padding e border 
console.log(section.scrollWidth); //Largura total, mesmo dentro do scroll, ou seja, tamanho em si do objeto


//offsetTop e offsetLeft
console.log('----------offsetTop e offsetLeft----------');
//Retorna as distâncias entre as bordas da página
const animais = document.querySelector('.animais');
console.log(animais.offsetTop); //Distância entre o topo do elemento e o topo da página
console.log(animais.offsetLeft); //Distância entre o canto esquerdo do elemento e o canto esquerdo da página

//getBoundingClientRect
console.log('----------getBoundingClientRect----------');
const rect = section.getBoundingClientRect();
console.log(rect.height);
console.log(rect.width);
console.log(rect.top);
if(rect.top < 0){
    console.log("passou do elemento");
}

//Window
console.log('----------Window----------');
//Retorna os valores relacionados a janela
console.log(window.innerWidth); //Retorna a largura da pagina
console.log(window.outerWidth); //Retorna a largura da janela
console.log(window.innerHeight); //Retorna a altura da pagina
console.log(window.outerHeight); //Retorna a altura da janela, com a barra de pesquisa
console.log(window.pageYOffset); //Distância do elemento para o scroll horizontal
console.log(window.pageXOffset); //Distância do elemento para o scroll vertical
if(window.innerWidth < 600){
    console.log('Página menor que 600px')
}//maneira incorreta de verificar, o certo é com o matchMedia apresentado abaixo

//matchMedia
console.log('----------matchMedia----------');
//Usa o media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)')
if(small.matches){
    console.log('Tela menor que 600px');
}else{
    console.log('Tela maior que 600px');
}




//Exercício
console.log('----------Exercício----------');
//Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

//Retorne a soma da largura de todas as imagens
const todasImgs = document.querySelectorAll('img');
let soma = 0;
todasImgs.forEach((img) => {
    soma += img.offsetWidth;
});
console.log(soma);

//Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px) segundo o google
const todosLinks = document.querySelectorAll('a');
todosLinks.forEach((link) => {
    if(link.offsetWidth >= 48 && link.offsetHeight >= 48)
        console.log('O link', link ,'possui tamanho maior que o mínimo')
    else
        console.log('O link', link ,'NÃO possui tamanho maior que o mínimo')
});

//Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const broserWidth = window.matchMedia('(max-width: 720px)').matches;
if(broserWidth){
    const tela = document.querySelector('.menu');
    tela.classList.add('menu-mobile');
}
}