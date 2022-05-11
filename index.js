let myLibrary = [];

const book1 = new Book("Lord of the Rings", "J.R.R. Tolkien", "425", true);
myLibrary.push(book1);
const book2 = new Book("The Martian", "Andy Weiss", "353", false);
myLibrary.push(book2);

// Variable that stores the displayed books
const shelve = document.querySelector("#container");

myLibrary.forEach((book) => {
  const bookInfo = document.createElement("div");
  bookInfo.textContent = book.info();
  shelve.appendChild(bookInfo);
});

// Show details of each book in myLibrary

function Book(title, author, pages, iveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.iveRead = iveRead;
  this.info = function () {
    return `${this.title} by ${this.title}, ${pages}, Read:${this.iveRead}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}
