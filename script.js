const mario = document.querySelector('.pulo');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)
}


document.addEventListener("keydown", pulo)