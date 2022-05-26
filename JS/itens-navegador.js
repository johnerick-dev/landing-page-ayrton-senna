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
