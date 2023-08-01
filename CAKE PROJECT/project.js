let navbar = document.querySelector('.navbar');

document.querySelector('#menubtn').onclick = () =>{
    navbar.classList.toggle('active');
}

 window.onscroll = () => {
    navbar.classList.remove('active');   
}


let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
}

let Profileitem = document.querySelector('.Profile-item-container');

document.querySelector('#Profile-btn').onclick = () =>{
    Profileitem.classList.toggle('active');
}

// let cartitem = document.querySelector('.cart-item-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartitem.classList.toggle('active');
// }

// let searchform = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchform.classList.toggle('active');
// }




