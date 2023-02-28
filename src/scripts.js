const bookContainer = document.querySelector(".bookcontainer");
const popup = document.querySelector(".popup");
const addBook = document.querySelector(".addbookbutton");
const submitButton = document.querySelector(".submitbutton");

addBook.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

const myLibrary = [];

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

  statusbutton.classList.add("statusbutton");
  removebutton.classList.add("removebutton");

  statusbutton.innerText = book.readstatus;
  removebutton.innerText = "Remove";

  bookBoxButtons.append(statusbutton, removebutton);
  bookContainer.appendChild(bookBox);
  bookBox.append(firstP, secondP, thirdP);
  bookBox.appendChild(bookBoxButtons);

  statusbutton.addEventListener("click",() =>
    (statusbutton.innerText = statusbutton.innerText === "Read" ? "Not Read" : "Read")
  );
}

// This function adds the books to the library in HTML
function addBookToLibrary() {
  myLibrary.forEach((object) => createBookElements(object));
}

const resetLibrary = function () {
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }
};

submitButton.addEventListener("click", () => {
  event.preventDefault();
  const bookTitle = document.querySelector('input[name="title"]');
  const bookAuthor = document.querySelector('input[name="author"]');
  const bookPages = document.querySelector('input[name="pages"]');
  const bookCheckBox = document.querySelector('input[type="checkbox"]');
  let bookReadStatus = "";

  bookCheckBox.checked ? bookReadStatus = "Read" : bookReadStatus = "Not read";



  if (bookTitle.value && bookAuthor.value && bookPages.value) {
    const book = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookPages.value,
      bookReadStatus
    );
    popup.style.visibility = "hidden";
    resetLibrary();
    myLibrary.push(book);
    addBookToLibrary();
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
  }
});
