$(document).ready(function () {

  // 타이포그래피 active
  var wrapper = document.querySelector(".typography svg");

  function draw() {
    wrapper.classList.add("active");
  }

  setTimeout(draw, 4500);//타이포그래피 4.5초

  //내부 링크로 부드럽게 이동
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  //scroll이벤트
  $(function () {
    var t = 0;
    var timer = 0;
    $(window).scroll(function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        t = $(window).scrollTop();
        console.log(t);

        var h = 0;
        h = $('.caption').offset().top;
        console.log(h);

        if (t <= $('.welcome').offset().top + 150) {
          $(".font_top").addClass("on");
          $(".font_middle").addClass("on");
          $(".font_bottom").addClass("on");
          $(".quote_left").addClass("on");
          $(".quote_right").addClass("on");
          $(".typography").addClass("on");
          $(".container-box").addClass("on");
          $(".typography_line").addClass("on");
          $(".introduction").addClass("on");
        } else if (t <= $('.skill-left').offset().top + 150) {
          $(".skill-left").addClass("on");
          $(".skill-right").addClass("on");
        } else if (t <= $('.caption').offset().top) {
          $(".caption").addClass("on");
        } else if (t <= $('.tesla_caption').offset().top) {
          $(".tesla_caption").addClass("on");
        }
      }, 500);
    });
    $(window).trigger("scroll");
  })

  //work팝업창

  //화성행궁 팝업창
  $(function () {
    $('.pop_Hwaseong').click(function (e) {
      e.preventDefault();
      //show
      $('.work_popup').show();
      $('.transparent').show();
      //hide
      $('.close').click(function (e) {
        e.preventDefault();
        $(".work_popup").hide();
        $('.transparent').hide();
      })
      $('.transparent').click(function (e) {
        e.preventDefault();
        $(".work_popup").hide();
        $('.transparent').hide();
      })
    })
  })
  //해리포터 팝업창
  $(function () {
    $('.pop_HarryPotter').click(function (e) {
      e.preventDefault();
      //show
      $('.work_popup2').show();
      $('.transparent').show();
      //hide
      $('.close').click(function (e) {
        e.preventDefault();
        $(".work_popup2").hide();
        $('.transparent').hide();
      })
      $('.transparent').click(function (e) {
        e.preventDefault();
        $(".work_popup2").hide();
        $('.transparent').hide();
      })
    })
  })
});