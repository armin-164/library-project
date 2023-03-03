/* eslint-disable no-param-reassign */
const bookContainer = document.querySelector(".bookcontainer");
const popup = document.querySelector(".popup");
const addBook = document.querySelector(".addbookbutton");
const submitButton = document.querySelector(".submitbutton");
const closeButton = document.querySelector(".close-button");
popup.style.visibility = "hidden";

// Add function that toggles element visibility
const toggleVisibility = (element) => {
  element.style.visibility =
    element.style.visibility === "hidden" ? "visible" : "hidden";
};

// Add eventlistener that makes the popup visible on addbook and closebutton click
addBook.addEventListener("click", () => toggleVisibility(popup));
closeButton.addEventListener("click", () => toggleVisibility(popup));

const myLibrary = [];

// This is the book constructor
class Book {
  constructor(title, author, pages, readstatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;
  }
}

// Function that makes the eventlistener above work
const removeBookFromLibrary = (id, element) => {
  myLibrary.splice(id, 1);
  element.remove();
}

// This function will create the books
function createBookElements(book, index) {
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
  removebutton.setAttribute("data-index", index);

  bookBoxButtons.append(statusbutton, removebutton);
  bookContainer.appendChild(bookBox);
  bookBox.append(firstP, secondP, thirdP);
  bookBox.appendChild(bookBoxButtons);

  // Add eventlistener to the statusbutton that toggles between "Read" and "Not Read"
  statusbutton.addEventListener("click", () => {
    const newStatus = statusbutton.innerText === "Read" ? "Not Read" : "Read";
    statusbutton.innerText = newStatus;
    book.readstatus = newStatus;
  });

  // Add eventlistener that removes the book from the library array
  // by matching the data-index and also removes an element
  removebutton.addEventListener("click", () =>
    removeBookFromLibrary(removebutton.dataset.index, bookBox)
  );
}

// This function adds the books to the library in HTML
const addBookToLibrary = () => {
  myLibrary.forEach((object, index) => createBookElements(object, index));
}

// This function serves to reset the DOM Library so books wont duplicate
const resetLibrary = () => {
  while (bookContainer.firstChild) {
    bookContainer.firstChild.remove();
  }
};

// Adds an eventlistener to the submitbutton that fetches inputs,
// checks if checkbox is checked and creates a book if all inputs
// are full. Also makes the popup invisible and resets the library DOM
// and push the new book to the library array and call addBookToLibrary
// which adds all of the book objects from the library array to the DOM.
// And then reset the input values
submitButton.addEventListener("click", () => {
  const bookTitle = document.querySelector('input[name="title"]');
  const bookAuthor = document.querySelector('input[name="author"]');
  const bookPages = document.querySelector('input[name="pages"]');
  const bookCheckBox = document.querySelector('input[type="checkbox"]');

  if (bookTitle.value && bookAuthor.value && bookPages.value) {
    const bookReadStatus = bookCheckBox.checked ? "Read" : "Not read";
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
    bookCheckBox.checked = false;
  }
});
