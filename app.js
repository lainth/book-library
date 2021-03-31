const submitButton = document.getElementById("submit");
const tbody = document.querySelector("tbody");
let j = 0;
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let bookTitle = document.getElementById("book").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("pages").value;
  let bookStatus = document.getElementById("status").value;
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function clearFields() {
  document.getElementById("book").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("status").value = "Read";
}

function displayBooks(index) {
  for (let i = index; i < myLibrary.length; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = myLibrary[i].title;
    tr.appendChild(th);
    const tdAuth = document.createElement("td");
    tdAuth.textContent = myLibrary[i].author;
    tr.appendChild(tdAuth);
    const tdPages = document.createElement("td");
    tdPages.textContent = parseInt(myLibrary[i].pages);
    tr.appendChild(tdPages);
    const tdRead = document.createElement("td");
    const readButton = document.createElement("button");
    readButton.setAttribute("type", "button");
    readButton.classList.add("btn", "btn-light");
    readButton.textContent = myLibrary[i].read;
    tdRead.appendChild(readButton);
    tr.appendChild(tdRead);
    const tdDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", "delete");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Delete";
    tdDelete.appendChild(deleteButton);
    tr.appendChild(tdDelete);
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearFields();
  displayBooks(j);
  j++;
});
