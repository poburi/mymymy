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
  });
});
