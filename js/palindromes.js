$(document).ready(function() {
  $("form").submit(function(event) {
    var pal = $("#input").val().toLowerCase().match(/(\w+)/gi).join("");
    var palr = pal.split("").reverse().join("");

    if (pal === palr) {
      alert("congrats!");
    }
    else {
      alert("please enter palindrome")
    }
    event.preventDefault();
  });
});
