//O que é o DOM
//DOM significa Document Object Model, é uma interface que representa documentos HTML e XML através de objetos. com ela é possivel manipular a estrutura, estilo e conteúdo desdes documentos.
console.log(window);
//window é o objeto do browser, que possui diferentes métodos e propriedades
window.innerHeight;
//retorna a altura do browser

//Window e Document
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
  //window.alert('Isso é um alerta');
  //alert('Isso é um alerta'); // Tambem funciona, já que o window é global, não é necessário escreve-lo na frente
const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1
console.log(h1Selecionado);
document.body; // Retorna o body

//Node
//toda tag html é representada pelo objeto Element e por isso, herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1');
console.log(titulo.innerText); //retorna o texto
console.log(titulo.classList); //retorna as classes
console.log(titulo.id); //retorna o id
console.log(titulo.offsetHeight); //retorna a altura do elemento
titulo.addEventListener('click', function () {
    console.log('clicou em ', titulo);
});
//Quando clicar no h1, vai ser exibido a mensagem mostrando o elemento}




//Exercício

//Retorne a url da página atual utilizando o objeto window
console.log(window.document.location.href);

//Selecione o primeiro elemento da página que possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo);

//Retorne a linguagem do navegador
console.log(window.navigator.language);

//Retorne a argura da janela 
console.log(innerWidth);