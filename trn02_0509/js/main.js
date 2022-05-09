$(function () {/* 이 파일이 어디에 위치해있던 사용 가능하게 하기 위해 작성 */
    /////////////////////////////////////////////////



    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(3000);
    })

    $('.main_slider').on('init reInit afterChange', function () {
        console.log('바꾸지마')
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })



    /////////////////////////////////////////////////
})