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


function Book(title, author, pages, readstatus) {
  this.title = `Title: ${title}`;
  this.author = `Author: ${author}`;
  this.pages = `Pages: ${pages}`;
  this.readstatus = readstatus;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${readstatus}`;
  };
}

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

function show(element, visibility) {
  element.style.visibility = visibility;
}

function addBookToLibrary() {
  show(popup, "visible");
  myLibrary.forEach((book) => createBookElements(book));
}

addBookToLibrary()