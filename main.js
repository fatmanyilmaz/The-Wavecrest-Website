const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon= menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (event) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
};

// header container
ScrollReveal().reveal('.header__container p', {
    ...scrollRevealOption, 
});
ScrollReveal().reveal('.header__container h1', {
    ...scrollRevealOption, delay: 500,
});

//about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
}); 

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

let room__img= document.querySelector('.room__slider .room__img');
let items= document.querySelectorAll('.room__slider .room__img .item');
let dots= document.querySelectorAll('.room__slider .dots li');
let prev= document.getElementById('prev');
let next= document.getElementById('next');

let active = 0;
let lenghtItems = items.length - 1;

next.onclick= function(){
    if(active + 1 > lenghtItems){
        active= 0;
    }else{
        active = active +1;
    }
    reloadSlider();
}

prev.onclick = function (){
    if (active - 1 < 0){
        active = lenghtItems;
    }else{
        active=active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()},5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    room__img.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.room__slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(()=> {next.click()},5000);
}

dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active =key;
        reloadSlider();
    })

})

//room container
ScrollReveal().reveal(".room__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".room__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".room__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".room__btn", {
    ...scrollRevealOption,
    delay: 2000,
});


//services container
ScrollReveal().reveal(".feature__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".feature__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".feature__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".room__btn", {
    ...scrollRevealOption,
    delay: 2000,
});


//gallery container

//services container
ScrollReveal().reveal(".gallery__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".gallery__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".gallery__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".room__btn", {
    ...scrollRevealOption,
    delay: 2000,
});