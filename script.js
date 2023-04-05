const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)
}

const sePerdeu = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace(`px`, ``);

    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 81) {

        cano.style.animation = 'none';
        cano.style.left=`${posicaoCano}px`; 

        mario.style.animation = 'none';
        mario.style.bottom=`${posicaoMario}px`  

        mario.src =`./images/mario_death.png`;
        mario.style.width = `50px`;
        mario.style.marginLeft = '50px'

        clearInterval(sePerdeu)
    }
}, 10)


document.addEventListener("keydown", pulo)