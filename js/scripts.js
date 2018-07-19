function Book(title, author) {
  this.book = title;
  this.author = author;
}

$(document).ready(function() {
  $("#add-to-read").submit(function() {

    $(".new-book").each(function() {
    var inputtedTitle = $(this).find("input.add-title").val();
    var inputtedAuthor = $(this).find("input.add-author").val();
    var newBook = new Book(inputtedTitle, inputtedAuthor);
    var bookList = []
    bookList.push(newBook);
  });

    $("#books-to-read").append(bookList)
  });
});
