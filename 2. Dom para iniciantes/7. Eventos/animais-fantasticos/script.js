//Eventos
console.log('----------Eventos----------');
//addEventListener
//Como diz o nome, "escutador de evento", adiciona uma função a um elemento, que, assim que certo evento acontecer, realiza um callback de uma função
const img = document.querySelector('img');
//elemento.addEventListener(event, callback, options)
img.addEventListener('click', () => {
    console.log('clicou na imagem');
});//Adiciona um evento na img, que ao ser clicado ('click') realiza uma função

//Callback
console.log('----------Callback----------');
//É uma boa pratica separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anonima, declarar também facilita no processo de debug
function callback(){
    console.log('clicou');
}
img.addEventListener('click', callback);
img.addEventListener('click', callback());//undefinied, como está chamando a função ela é executada quando a pagina carrega e não pro evento

//Event
console.log('----------Event----------');
//É o primeiro parâmetro do callback e é referente ao evento que ocorreu, retornando um objeto
function callbackEvent(event){// 'event' também é comumente chamado apenas de 'e'
    console.log(event);
}
img.addEventListener('click', callbackEvent);
//Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');
function executarCallback(event){
    const currentTarget =  event.currentTarget; //this
    const target =  event.target; //Elemento onde o clique ocorreu
    const type =  event.type; //Tipo de evento
    const path =  event.path; 
    console.log('Propriedades Evento',currentTarget, target, type, path);
}
animaisLista.addEventListener('click', executarCallback);

//preventDefault
console.log('----------preventDefault----------');
//Previne o comportamento padrão do evento no browser, como em um link externo, que irá previnir que o link seja chamado ao clicar no mesmo
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event){
    event.preventDefault();
    console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink);

//this
console.log('----------this----------');
//É uma palavra especial do JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referencia ao elemento em que o addEventListener foi adicionado
function callbackThis(){
    console.log('this',this);
    console.log('this',this.getAttribute('src'));
}
img.addEventListener('click', callbackThis);

//Diferentes Eventos
console.log('----------Diferentes Eventos----------');
//Existem vários eventos como click(clique), scroll(scroll do mouse), resize(redimencionar o tamanho da janela), keydown(pressionar uma tecla), keyup(soltar uma tecla), mouseenter(passar o mouse por cima) e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também. Lista para todos os eventos: https://developer.mozilla.org/en-US/docs/Web/Events
const h1 = document.querySelector('h1');
function callbackManyEvents(event){
    console.log(event.type, event);
}
h1.addEventListener('click', callbackManyEvents);
h1.addEventListener('mouseenter', callbackManyEvents);
window.addEventListener('scroll', callbackManyEvents);
window.addEventListener('resize', callbackManyEvents);
window.addEventListener('keydown', callbackManyEvents);

//Keyboard
console.log('----------Keyboard----------');
//Você pode Adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard
function HandleKeyboard(event){
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho');
}
window.addEventListener('keydown', HandleKeyboard);

console.log('----------forEach em Eventos----------');
//forEach em Eventos
const imgs = document.querySelectorAll('img');
function imgSrc(event){
    const src = event.currentTarget.getAttribute('src');
    console.log(src)
}
imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});




//Exercício
console.log('----------Exercício----------');
//Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão destes links
const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add("ativo");
}
linksInternos.forEach((link) =>{
    link.addEventListener('click',handleLink);
})

//Selecione todos os elementos do site começando a apartir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');
function handleElements(event){
    console.log(event.currentTarget);
}
todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElements);
});

//Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove o elemento
const todosElementosRemover = document.querySelectorAll('body *');
function handleElementsRemove(event){
    event.currentTarget.remove();
}
todosElementosRemover.forEach((elemento) => {
    elemento.addEventListener('click', handleElementsRemove);
});

//Se o usuário clicar na tecla (t), aumente todo o texto do site
function HandleKeydownT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}
window.addEventListener('keydown', HandleKeydownT);