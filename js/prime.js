var getPrimes = function(input) {
  var numbers = [];
  for (i = 2; i <= input; i++) {
    numbers.push(i);
  }

  numbers.forEach(function(number) {
    for (i = number + number; i <= input; i += number) {
      if (numbers.indexOf(i) >= 0) {
        numbers.splice(numbers.indexOf(i), 1);
      }
    }
  });
  return numbers;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = parseInt($("input").val());

    if (!userInput) {
      alert("Please enter a number!");
    } else if (userInput < 2) {
      alert("Please enter a number greater than 1");
    } else {
      var primes = getPrimes(userInput);
      $(".inputNumber").text(userInput);
      $("ul#result").children().remove();
      primes.forEach(function(prime) {
        $("ul#result").append("<li>" + prime + "</li>");
      });
      $(".results").fadeIn();
    }
    event.preventDefault();
  });
});
