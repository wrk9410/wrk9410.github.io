$(function () {/* 이 파일이 어디에 위치해있던 사용 가능하게 하기 위해 작성,
    js는 모든 파일이 실행 후 적용이 되어야 하여 아래쪽에 위치해 있으나, $(function(){})로 설정 시 위쪽에 작성하여도 후순위로 실행되어 오류방지됨*/
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
    });
    $('.yutube i:nth-of-type(2)').on('click', function () {
        $('#my_Movie').YTPPause();
    });



    // $('.product_slider').on('init reInit afterChange', function () {
    //     // console.log('바꾸지마')
    //     let current = $('.product_slider .slick-current');/* current : 지금 있는 컨텐츠? */
    //     current.addClass('on').siblings().removeClass('on');
    //     // console.log('바뀜')
    //     /* (선택자)가 잡힌 것에 on을 붙힌다. */
    // })



    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.product_list .s_left').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });
    $('.product_list .s_right').on('click', function () {
        $('.product_slider').slick('slickNext')
    });

    $('.tab_link>li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tap_content>li').eq(idx).addClass('on').siblings().removeClass('on')
        /* eq : nth-of-type과 동일?
        siblings : 이벤트를 먹는 형제자매 클래쓰 */
    });

    $('.footer #link').on('change', function () {
        var lik = $(this).val();
        if (lik) window.open(lik) /* 만약, lik가 있을 경우 새창을 띄워라 */
    })










    /////////////////////////////////////////////////
})