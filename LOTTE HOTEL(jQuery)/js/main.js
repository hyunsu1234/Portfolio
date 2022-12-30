$(document).ready(function () {

    //팝업창
    $(function () {
        $(".btn_open").click(function () {
            $(".popup_lists").toggleClass("on"),
                $(".btn_open").toggleClass('on')
        });
    });

    //header up down
    $(function () {
        var t = 0;
        var timer = 0;
        let ww = 0;

        $(window).scroll(function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                h = $('.main_img').offset().top
                console.log(h);
                t = $(window).scrollTop();
                console.log(t);
                ww = $(window).innerWidth();
                if (t >= $('.main_img').offset().top, ww >= 768) {
                    $(".top").slideUp(400);
                }
                if (t <= $('.main_img').offset().top) {
                    $(".top").slideDown(400);
                }
            }, 500);
        })
    });

    //quick 맨위로 이동
    $(function () {
        $('.quick').click(function () {
            $('html, body').animate({ scrollTop: '0' }, 680);
        });
    })
});
