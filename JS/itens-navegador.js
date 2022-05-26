//Efeito do botão de scroll top
function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
function decidirBotaoScroll() {
    if (window.scrollY === 0) {
        document.querySelector('.botao').style.display = 'none';
    } else {
        document.querySelector('.botao').style.display = 'block';
    }
}
window.addEventListener('scroll', decidirBotaoScroll)

//Efeito ocultar nav
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('#ocultar-nav').style.top = "0";
        } else {
            document.querySelector('#ocultar-nav').style.top = "-220px";
        }
    prevScrollpos = currentScrollPos;
}

//Efeito para abrir aplayer de audio
function abrirPlayer() {
    let player1 = document.querySelector('.botao-audio');

    if (player1.style.width > "1px"){
        document.querySelector('.botao-audio').style.width = "245px";
    } else {
        document.querySelector('.botao-audio').style.width = "90px";
    }  
}
abrirPlayer();

function fecharPlayer(){
    let player2 = document.querySelector('.botao-audio');

    if (player2.style.width = "245px"){
        document.querySelector('.botao-audio').style.width = "90px";
    } else {
        document.querySelector('.botao-audio').style.width = "245px";
    }
}
fecharPlayer();
