const $ = window.JQuery;
window.onload = function () {
    $("#red_header").click(function () {
	$("header").css("color", "#FF0000");
    });
};
