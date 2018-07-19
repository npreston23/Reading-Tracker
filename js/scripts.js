var inputtedBook;
var inputtedPage;
var inputtedAuthor;
var savedBook;

function Book(title, page, author) {
  this.title = title;
  this.page = page;
  this.author = author;
};

var grabBookInfo = function(){
  inputtedBook = document.getElementById("bookTitle").value;
  inputtedPage = document.getElementById("pageNumber").value;
  inputtedAuthor = document.getElementById("authorName").value;
};

var saveBookInfo = function(){

};

// user interface logic
$(document).ready(function() {
  $("#currentBook").submit(function(event) {
    event.preventDefault();

    grabBookInfo();

    savedBook = new Book(inputtedBook, inputtedPage,  inputtedAuthor);

    $("#finishedBooks").append("<li> <span class='contact'>" + savedBook.title + "</span></li>");

    document.getElementById("currentBook").reset();

//    $(".#").last().click(function() {
//      $("#completed-books").show();
//      $("#completed-books").text(savedBook.title);
//      $(".#").text(savedBook.page);
//      $(".#").text(savedBook.page);
//    });
  });
});
