var replaceVowels = function(input) {
  var output = [];
  var chars = input.split("");
  chars.forEach(function(char) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u") {
      char = "-"
    }
    output.push(char);
  });
  return output.join("");
}

$(document).ready(function() {
  $("form").submit(function(hash) {
    var sentence = $("#input").val();
    sentence = replaceVowels(sentence);
    $(".results").children().remove();
    $(".results").append("<p>" + sentence + "</p>");
    hash.preventDefault();
  });
});
