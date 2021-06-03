// === ANIMA MENU === 
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('active');
        $('.fa-search').removeClass('active');
        $('.img-logo').removeClass('active');
        $('.campo-busca').removeClass('active');
    });
    $('.fa-search').click(function(){
        $('.nav__menu').addClass('show');
        $('#nav-toggle').addClass('active');
        $('.img-logo').toggleClass('active');
        $('.fa-search').toggleClass('active');
        $('.campo-busca').addClass('active');
    });
});



// === MOSTRAR MENU === 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav && $('#nav-toggle active')){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// === ACTIVE AND REMOVE MENU ===
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  // === Active link ===
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  // === Remove menu mobile ===
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));