$(document).ready(function()  {
  $("form").submit(function(event) {
    var num = $("#input").val();
    debugger;
    for (i = num; i > 0; i--) {
      debugger;
      num = num * i;
      console.log(num);
    }
    });
});
