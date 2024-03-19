const myLibrary = [];
let addbtn = document.querySelector(".addbtn");
let form = document.querySelector(".form");
//to render book on page
function render() {
  let libraryEl = document.querySelector(".library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("book");
    bookEl.innerHTML = `<h3 class="title">${book.title}</h3>
    <h4>by:${book.author}</h4>
    <p class="pages">${book.pages} pages</p>
    <p class="pages">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="jsbtn" onclick="removeBook(${i})">Remove</button>
    <button class="jsbtn"onclick="toggleRead(${i})">Toggle Read</button>`;
    libraryEl.appendChild(bookEl);
    //document.querySelector(".remove").addEventListener("click", function () {
    //remove(${i});

    //});
  }
}
//to remove any book
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

addbtn.addEventListener("click", function () {
  form.style.display = "block";
});
document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
//add sample books
