$(function () {
  printedYear();
});

if (window.screen.width) {
  var setViewport = {
    setSliderItem: function () {
      var widthDevice = window.innerWidth || window.screen.width;
      var widthMin = 560;
      params = (widthDevice <= widthMin) ? '2' : '4';
      console.log(widthDevice, widthMin, params);

      //뷰포트 슬라이더
      $('.js-slider').touchSlider({
        view: params,
        gap: 10,
      });
    }
  }

  //탭 슬라이더 초기화
  $(".js-tab-menu .btn-tab").on("click touchstart", function (e) {
    e.preventDefault();
    var target = $(this).data("tab");

    /* 텝 메뉴 이미 활성화 되어있는 경우 조건 */
    if($(this).hasClass("showing")){
     return false;
    } else {
      $(this)
      .toggleClass("showing")
      .siblings()
      .removeClass("showing");
    }

    $(this)
      .closest(".js-tab-wrap")
      .find(".js-tab-contents")
      .hide();

    $(this)
      .closest(".js-tab-wrap")
      .find("#" + target + ".js-tab-contents")
      .show();

    $('.js-slider').touchSlider({
      view: params,
      gap: 10,
    });
  });

  setViewport.setSliderItem();
  window.addEventListener("resize", setViewport.setSliderItem);
}

/* global variable */
var f = $(".contact-form"),
  inp = f.find(".inp");


function getYear() {
  var _date = new Date();

  var year = _date.getFullYear();
  return year;
}

function printedYear() {
  var todayYear = getYear();
  $(".year").text(todayYear);
}

$(".inp").focusout(function () {
  if ($(this).val() == '') {
    $(this).closest(".inp-wrap").addClass("error");
  }
  else {

    // If it is not blank. 
    $(this).closest(".inp-wrap").removeClass("error");
  }
}).focusin(function () {
  $(this).closest(".inp-wrap").removeClass("error");
});


