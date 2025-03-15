//MENU
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Abrir e fechar o menu ao clicar no botão hambúrguer
menuToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
});

// Fechar o menu ao clicar em um link de âncora
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    });
});

// Fechar o menu ao clicar fora dele
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

/*Trocar a cor do logo */
let mediaQuery = window.matchMedia("(max-width: 576px)").matches;
const logo = document.querySelector('.logo img');
    if(mediaQuery){
        logo.setAttribute('src', 'imgs/logo/logo-branco.png'); 
    } else{
        logo.setAttribute('src', 'imgs/logo/logo.png');
    }

/*Marcação de navegação por tab*/
const navItens = document.querySelectorAll('nav ul li a');

function ativarNav(event) {
    navItens.forEach((item) => {
        item.classList.remove('ativo')
    })
    event.target.classList.add('ativo');
}

addEventListener('click', ativarNav)