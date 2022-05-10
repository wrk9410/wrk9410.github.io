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

    /* '선택자':nth-of-type(번호) : 선택자의 몇 (번호)째에 적용 */
    $('.movie .dec i:nth-of-type(1)').on('click', function () {
        $('.movie video').trigger('play')
    })

    $('.movie .dec i:nth-of-type(2)').on('click', function () {
        $('.movie video').trigger('pause')
    })

    $('#my_Movie').YTPlayer({
        videoURL: 'https://youtu.be/KRB77WI_N-Y',
        containment: '.yutube',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.yutube i:nth-of-type(1)').on('click', function () {
        $('#my_Movie').YTPPlay();
    })
    $('.yutube i:nth-of-type(2)').on('click', function () {
        $('#my_Movie').YTPPause();
    })

    /////////////////////////////////////////////////
})