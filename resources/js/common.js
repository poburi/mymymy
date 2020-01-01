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
			view: 3,
			gap: 20,
		});
  });

  printedYear();
});

function getYear() {
  var _date = new Date();

  var year = _date.getFullYear();
  return year;
}

function printedYear(){
  var todayYear = getYear();
  $(".year").text(todayYear);
}