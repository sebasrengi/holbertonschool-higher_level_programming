const $ = window.jQuery;
window.onload = function () {
  $("#update_header").click(function () {
    $("header").text("New Header!!!");
  });
};
