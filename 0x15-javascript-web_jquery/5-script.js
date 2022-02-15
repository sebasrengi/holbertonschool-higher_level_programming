const $ = window.jQuery;
window.onload = function () {
  $("#add_item").click(function () {
    $(".my_list").append("<li>Item</li>");
  });
};
