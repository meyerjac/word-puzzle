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

    var primes = getPrimes(userInput);
    $("ul").children().remove();
    primes.forEach(function(prime) {
      $("ul").append("<li>" + prime + "</li>");
    });

    event.preventDefault();
  });
});
