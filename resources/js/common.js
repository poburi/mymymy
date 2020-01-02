$(function() {
  $(".js-tab-menu .btn-tab").on("click", function() {
    var target = $(this).data("tab");

    $(this)
      .toggleClass("showing")
      .siblings()
      .removeClass("showing");

    $(this)
      .closest(".js-tab-wrap")
      .find(".js-tab-contents")
      .hide();

    $(this)
      .closest(".js-tab-wrap")
      .find("#" + target + ".js-tab-contents")
      .show();

      $('.js-slider').touchSlider({
			view: 2,
			gap: 10,
		});
  });

  printedYear();
});

/* global variable */
var f = $(".contact-form"),
  inp = f.find(".inp");


function getYear() {
  var _date = new Date();

  var year = _date.getFullYear();
  return year;
}

function printedYear(){
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
}).focusin(function(){
  $(this).closest(".inp-wrap").removeClass("error");
})
 
 