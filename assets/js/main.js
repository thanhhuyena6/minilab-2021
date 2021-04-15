// Hamburger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}
navSlide();

// Scroll Header

$(document).ready(function(){
    $(window).scroll(function(){
        var header = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 1){
            header.addClass('sticky');
        }
        else {
            header.removeClass('sticky');
        }
    });
})