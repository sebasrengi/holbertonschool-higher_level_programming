const $ = window.jQuery;
window.onload = function () {
  $.get("https://swapi-api.hbtn.io/api/films/?format=json", (data, status) => {
    if (status === "success") {
      for (let iter of data.results) {
        $("#list_movies").append(`<li>${iter.title}</li>`);
      }
    }
  });
};
