const $ = window.jQuery;
window.onload = function () {
    $("#toggle_header").click(function () {
	$("header").toggleClass("red green");
    });
};
