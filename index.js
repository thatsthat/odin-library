let myLibrary = [];

const book1 = new Book("Lord of the Rings", "J.R.R. Tolkien", "425", true);
myLibrary.push(book1);
const book2 = new Book("The Martian", "Andy Weiss", "353", false);
myLibrary.push(book2);

// Variable that stores the displayed books
const shelve = document.querySelector("#books");

// Show details of each book in myLibrary
myLibrary.forEach((book) => addBookInfo(book));

function addBookInfo(book) {
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("book");
  bookInfo.textContent = book.info();
  shelve.appendChild(bookInfo);
}

document.forms["new-book"].addEventListener("submit", (event) => {
  event.preventDefault();
  // TODO do something here to show user that form is being submitted
  fetch(event.target.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(event.target)), // event.target is the form
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((body) => {
      const newBook = new Book(
        body.form.title,
        body.form.author,
        body.form.pages,
        body.form.read
      );
      addBookInfo(newBook);
    })
    .catch((error) => {
      // TODO handle error
    });
});

function Book(title, author, pages, iveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.iveRead = iveRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages}, Read:${this.iveRead}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}
