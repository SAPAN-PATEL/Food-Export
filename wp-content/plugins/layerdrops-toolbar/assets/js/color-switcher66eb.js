(function ($) {
  "use strict";

  // boxed layout switcher
  if ($(".boxed-switcher").length) {
    $(".boxed-switcher").on("click", function () {
      $("body").toggleClass("boxed-wrapper");
    });
  }

  // color switcher

  if ($("#styleOptions").length) {
    var cssPath = $("#styleOptions").data('css-path');
    $("#styleOptions").styleSwitcher({
      hasPreview: false,
      fullPath: cssPath,
      defaultThemeId: 'aivons-color-scheme-css',
      cookie: {
        expires: 999,
        isManagingLoad: true
      }
    });
  }

  if ($(".style-switcher").length) {
    $("#switcher-toggler").on("click", function (e) {
      e.preventDefault();
      $(".style-switcher").toggleClass("active");
    });
  }

})(jQuery);