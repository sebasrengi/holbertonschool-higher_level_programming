const $ = window.jQuery;
window.onload = function () {
  $.get("https://fourtonfish.com/hellosalut/?lang=fr", (data, status) => {
    if (status === "success") {
      $('#hello').text(data.hello)
    }
  });
};
