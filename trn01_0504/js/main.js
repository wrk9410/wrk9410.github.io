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
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
        // $('span').toggleClass('on')
        $('.mopen').toggleClass('on')
        /* $('영향을 줄 것').실행할 명령어('실행될 것')
        .mopen에게 on이라는 class를 붙힐 것이다. */

        // $ classlist('on')
        // $('nav.gnd.on').toggleClass('on')
    });
});






