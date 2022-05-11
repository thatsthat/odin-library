let myLibrary = [];

function Book(title, author, pages, iveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.iveRead = iveRead;
  this.info = function () {
    return `${this.title} by ${this.title}, ${pages}, ${this.iveRead}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}
