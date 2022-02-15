const $ = window.jQuery;
window.onload = function () {
    $("#red_header").click(function () {
	$("header").addClass("red");
    });
};
