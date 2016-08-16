$(document).ready(function()  {
  $("form").submit(function(event) {
    var num = parseInt($("#input").val());

    if (num === 0) {
      num = 1;
    } else if (!num) {
      alert("Please enter a number!");
    } else if (num < 0) {
      alert("Please enter a positive number!");
    } else {
      for (i = num-1; i > 0; i--) {
        num = num * i;
      }
    }
    if (num) {
      $(".results").children().remove();
      $(".results").append("<p>" + num + "</p>");
    }
    event.preventDefault();
    });

});
