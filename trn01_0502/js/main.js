/* window.addEventListener('DOMCContentLoaded', function () {
    document.querySelector('.header').style.display = 'none';
}) */

$(function () {
    /* {}는 객체가 될 수 있다. */
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots: true,
    });
})