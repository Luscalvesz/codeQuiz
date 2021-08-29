function writer(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 100* i);
    });
}
function writer(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 100* i);
    });
}
const title = document.querySelector('.main-box-subtitle');
window.onload = writer(title)

function logoIn(){
    var logo = document.querySelector(".header-box-logo")
    logo.src = "assets/imgs/logoActive.svg"
}
function logoOut(){
    var logo = document.querySelector(".header-box-logo")
    logo.src = "assets/imgs/logo.svg"
}
function callMenu() {
    var header = document.getElementById("menu")
    header.classList.toggle("activeMenu")
}

function carousel(){
    $('.carousel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
}
$(document).ready( function(){
    carousel();
});