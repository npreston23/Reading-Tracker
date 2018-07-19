$(document).ready(function() {
  $("#sr-only").click(function(event) {
    event.preventDefault();
    $("#currentBook").show();
    $(".row").hide();
    $(".wrapper").hide();
  });

  $("#toRead").click(function(event) {
    event.preventDefault();
    $("#currentBook").hide();
    $(".row").hide();
    $(".wrapper").hide();
    $(".add-to-read").show();
  });

  $("#booksRead").click(function(event) {
    event.preventDefault();
    $("#currentBook").hide();
    $(".row").hide();
    $(".wrapper").hide();
    $(".add-to-read").hide();
    $(".books-read").show();
  });

});
