function Book(title, page) {
  this.Book = title;
  this.Page = page;
}

// user interface logic
$(document).ready(function() {
  $("form#current-book").submit(function(event) {
    event.preventDefault();

    var inputtedBook = $("input#book-title").val();
    var inputtedPage = $("input#page-number").val();

    var savedBook = new Save(inputtedBook, inputtedPage);

    $("ul#contacts").append("<li><span class='contact'>" + savedBook.Book + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
