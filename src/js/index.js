/*
 OBJETIVO 1 - quando passar o mause em cima do personagem temos que:

 - colocar a classe selecionado no personagem que passamos o mause em cima
 para adicionar a animação nele
 - retirar a classe selecionado do personagem que está selecionado

 OBJETIVO 2 - quando passar o mause em cima do personagem, irá
 trocar a imagem do personagem grande do lado esquerdo

 - alterar a imagem do jogador 1
 - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {

  personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return;

    /*OBJETIVO 1 - quando passar o mause em cima do personagem temos que:

    - colocar a classe selecionado no personagem que passamos o mause em cima
    para adicionar a animação nele
    - retirar a classe selecionado do personagem que está selecionado
         */

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')

    /* OBJETIVO 2 - quando passar o mause em cima do personagem, irá
    trocar a imagem do personagem grande do lado esquerdo

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
    */

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
      
    const nomejogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
  
    nomejogador1.innerHTML = nomeSelecionado

  });

});
