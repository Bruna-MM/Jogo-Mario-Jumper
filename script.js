const mario = document.querySelector('.mario');  /* Puxa a classe Mario */
const pipe = document.querySelector('.pipe');  /* Puxa a classe pipe */
const scoreElement = document.querySelector('.score');
const reloadButton = document.querySelector('.reload-button'); // Puxa o botão de recarregar

let score = 0;

const jump = () => {
    mario.classList.add('jump'); /* Adiciona a classe jump ao mario */
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); /* Remove a classe jump após 500ms */
}

/* Criar um loop para verificar a colisão */
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        /* Muda para a imagem do mario quando perde */
        mario.src = 'Assets/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    } else if (pipePosition < 0) { // Verifica se o cano saiu completamente da tela
        score++; // Incrementa o placar
        scoreElement.textContent = score; // Atualiza o valor do placar na tela
    }
}, 50);

document.addEventListener('keydown', jump); /* Adiciona o evento de tecla */ 
