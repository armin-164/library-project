const bookContainer = document.querySelector(".bookcontainer");
const popup = document.querySelector(".popup");

const myLibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 295,
    readstatus: "Have read",
  },
  {
    title: "The",
    author: "Dr Dre",
    pages: 295,
    readstatus: "Have read",
  },
];

// This is the book constructor 
function Book(title, author, pages, readstatus) {
  this.title = `Title: ${title}`;
  this.author = `Author: ${author}`;
  this.pages = `Pages: ${pages}`;
  this.readstatus = readstatus;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${readstatus}`;
  };
}

// This function will create the books
function createBookElements(book) {
  const bookBox = document.createElement("div");
  const bookBoxButtons = document.createElement("div");

  bookBox.classList.add("book");
  bookBoxButtons.classList.add("bookbuttons");

  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const thirdP = document.createElement("p");

  firstP.innerText = book.title;
  secondP.innerText = book.author;
  thirdP.innerText = book.pages;

  const statusbutton = document.createElement("button");
  const removebutton = document.createElement("button");

  statusbutton.innerText = book.readstatus;
  removebutton.innerText = "Remove";

  bookBoxButtons.append(statusbutton, removebutton);
  bookContainer.appendChild(bookBox);
  bookBox.append(firstP, secondP, thirdP);
  bookBox.appendChild(bookBoxButtons);
}

// This function serves to toggle element visibility
function show(element, visibility) {
  element.style.visibility = visibility;
}

// This function adds the books to the library in HTML
function addBookToLibrary() {
  show(popup, "visible");
  myLibrary.forEach((object) => createBookElements(object));
}

addBookToLibrary()