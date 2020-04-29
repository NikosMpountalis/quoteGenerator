$(document).ready(function () {
  $("h2").addClass("animated flipInX");
  $(".target").addClass("animated jackInTheBox");
  $("#new-quote").click(data);

  function data() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let random = (function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        })(0, 1643);

        let text = "";
        let author = "";

        $("#text").html((text = `<q>${data[random].text}</q>`));
        $("#author").html((author = `By: <q>${data[random].author}</q>`));
      });
  }

  let colors = [
    "#FF6433",
    "#FF9F33",
    "#F6D439",
    "#E5F639",
    "#C5F639",
    "#75F639",
    "#39F6B1",
    "#39F0F6",
  ];
  
  let i = 0;

  $("#new-quote").click(function () {
    i = i < colors.length ? i++ : 0;
    $("body").css("background-color", `${colors[i++]}`);
  });
});
