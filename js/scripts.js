$(document).ready(function() {
  $("#sr-only").click(function(event) {
    event.preventDefault();
    $("#currentBook").show();
    $(".row").hide();
    $(".wrapper").hide();
  });  
});
