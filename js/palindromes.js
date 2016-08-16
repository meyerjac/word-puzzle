$(document).ready(function() {
  $("form").submit(function(event) {
    var pal = $("#input").val().toLowerCase().match(/(\w+)/gi).join("");
    var palr = pal.split("").reverse().join("");

    if (pal === palr) {
      $(".results").children().remove();
      $(".results").append("<p> congrats, this is a palindrome!! </p>");
    }
    else {
      $(".results").children().remove();
      $(".results").append("<p> Need to find a new palindrome! </p>");
    }



    event.preventDefault();
  });
});
