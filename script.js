// Get the modal
const modal = document.getElementById("myModal");
const btn = document.querySelector(".header__add-button");
const span = document.getElementsByClassName("close")[0];
const form = document.querySelector(".form");
// const author = document.getElementById("author");
// const title = document.getElementById("title");
// const pages = document.getElementById("pages");
const main = document.querySelector('.main');
// const isRead = document.getElementById("isRead");
// const deleteBtn = document.querySelectorAll('.event__delete');
// const readBtn = document.querySelectorAll('.event__read');

let myLibrary = [{
    title: "Alchemist",
    author: "Paulo Coelho",
    pages: 197,
    isRead: true,
  },
  {
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    pages: 300,
    isRead: false,
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    pages: 400,
    isRead: false,
  },
];

btn.addEventListener('click', function () {
  modal.style.display = "block";
});
span.addEventListener('click', function () {
  modal.style.display = "none";
});
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newAuthor = author.value.trim();
  const newTitle = title.value.trim();
  const newPages = +pages.value;
  const newIsRead = isRead.checked ? true : false;

  addBookToLibrary(newAuthor, newTitle, newPages, newIsRead);

  author.value = "";
  title.value = "";
  pages.value = "";
  isRead.checked = false;
  modal.style.display = "none";
});

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function changeStatus(e) {
  const bookTitle =
    e.target.parentElement.parentElement.childNodes[0].childNodes[1]
      .textContent;
  console.log(bookTitle);

  if (e.target.textContent === "Read") {
    myLibrary.forEach((book) => {
      if (book.title === bookTitle) {
        book.isRead = !book.isRead;
      }
    });
    e.target.textContent = "Not Read";
    e.target.style.backgroundColor = "orange";
  } else {
    // Make library entry to true
    myLibrary.forEach((book) => {
      if (book.title === bookTitle) {
        book.isRead = !book.isRead;
      }
    });
    e.target.textContent = "Read";
    e.target.style.backgroundColor = "#28a745";
  }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(author, title, pages, isRead);
  newBook.display();
  myLibrary.push(newBook);
}

function removeCard(e) {
  e.target.parentElement.parentElement.parentElement.remove();
}

Book.prototype.display = function (e) {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const book = document.createElement("div");

  card.classList.add("card");
  cardBody.classList.add("card__body");
  book.classList.add("book");

  cardBody.appendChild(book);
  card.appendChild(cardBody);

  const author = document.createElement("p");
  author.classList.add("book__author");
  author.textContent = this.author;

  const title = document.createElement("p");
  title.classList.add("book__name");
  title.textContent = this.title;

  const pages = document.createElement("p");
  pages.classList.add("book__pages");
  pages.textContent = this.pages + " pages";

  const events = document.createElement("div");
  events.classList.add("event");
  cardBody.appendChild(events);

  const btnRead = document.createElement("button");
  const btnRemove = document.createElement("button");

  btnRead.classList.add("event__read");
  btnRemove.classList.add("event__delete");
  if (this.isRead) {
    btnRead.textContent = "Read";
  } else {
    btnRead.textContent = "Not Read";
    btnRead.classList.add("event__read--inactive");
  }

  btnRemove.textContent = "X";

  book.append(title, author, pages);
  events.append(btnRead, btnRemove);
  main.append(card);

  btnRemove.onclick = removeCard;
  btnRead.onclick = changeStatus;
};

function displayBooks() {
  myLibrary.forEach((savedBook) => {
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const book = document.createElement("div");

    card.classList.add("card");
    cardBody.classList.add("card__body");
    book.classList.add("book");

    cardBody.appendChild(book);
    card.appendChild(cardBody);

    const author = document.createElement("p");
    author.classList.add("book__author");
    author.textContent = savedBook.author;

    const title = document.createElement("p");
    title.classList.add("book__name");
    title.textContent = savedBook.title;

    const pages = document.createElement("p");
    pages.classList.add("book__pages");
    pages.textContent = savedBook.pages + " pages";

    const events = document.createElement("div");
    events.classList.add("event");
    cardBody.appendChild(events);

    const btnRead = document.createElement("button");
    const btnRemove = document.createElement("button");

    btnRead.classList.add("event__read");
    btnRemove.classList.add("event__delete");
    if (this.isRead) {
      btnRead.textContent = "Read";
    } else {
      btnRead.textContent = "Not Read";
      btnRead.classList.add("event__read--inactive");
    }

    btnRemove.textContent = "X";

    book.append(title, author, pages);
    events.append(btnRead, btnRemove);
    main.append(card);

    btnRemove.onclick = removeCard;
    btnRead.onclick = changeStatus;
  });
}

displayBooks();

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const book = new Book(author.value, nameOfBook.value, pages.value);
//   const ui = new UI();
//   ui.addBook(book);
//   ui.clearFields();
//   modal.style.display = "none";
// });

// class Book {
//   constructor(author, nameOfBook, pages) {
//     this.author = author;
//     this.nameOfBook = nameOfBook;
//     this.pages = pages;
//   }
// }

// class UI {
//   addBook(book) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card__body');
//     cardBody.innerHTML =
//       `<div class="book">
//         <p class="book__author">${book.author}</p>
//         <p class="book__name">${book.nameOfBook}</p>
//         <p class="book__pages">${book.pages}</p>
//       </div>
//       <div class="event">
//         <button class="event__read">Read</button>
//         <button class="event__delete">
//           X
//         </button>
//       </div>`;
//       // arrRead.push(cardBody.children[1].children[0]);
//       // arrNew.push(cardBody.children[1].children[1]);

//     // for (let i = 0; i < deleteBtn.length; i++) {
//     //   arrNew.push(deleteBtn[i]);
//     // }
    
//     // arrNew.forEach(function (element) {
//     //   element.addEventListener('click', function (e) {
//     //     if (e.target.classList.contains('event__delete')) {
//     //       if (confirm('Are you sure?')) {
//     //         let cardChild = e.target.parentElement.parentElement.parentElement;
//     //         console.log(cardChild);
//     //         main.remove(cardChild);
//     //       }
//     //     } else {
//     //       console.log('error');
//     //     }
//     //   });
//     // });

//     // for (let i = 0; i < readBtn.length; i++) {
//     //   arrRead.push(readBtn[i]);
//     // }
//     console.log(arrRead);


//     arrRead.forEach(function (element) {
//       element.addEventListener('click', function (e) {
//         if (e.target.classList.contains('event__read')) {
//           e.target.classList.toggle('event__read--active');
//           if (e.target.classList.contains('event__read--active')) {
//             e.target.textContent = 'Not read';
//           } else {
//             e.target.textContent = 'Read';
//           }
//         } else {
//           console.log('error');
//         }
//       });
//     });

//     card.appendChild(cardBody);
//     main.appendChild(card);    
//   }
  
//   clearFields() {
//     author.value = '';
//     pages.value = '';
//     nameOfBook.value = '';
//   }

//   deleteBook(e) {
//     // const card = document.querySelector('.card');
//     // main.removeChild(card);
//     if (e.target.classList.contains('event__delete')) {
//       if (confirm('Are you sure?')) {
//         let cardChild = e.target.parentElement.parentElement.parentElement;
//         console.log(cardChild);
//         main.removeChild(cardChild);
//       }
//     } else {
//       console.log('error');
//     }
//   }
// }
// console.log(arrRead.length);
// console.log(arrNew.length);

// deleteBtn.forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     // deleteBtn.addEventListener('click', function (e) {
//     const ui = new UI();
//     ui.deleteBook(e.target);
//     // });
//   });
// });


// // for (let i = 0; i < deleteBtn.length; i++) {
// //   arrLocal.push(deleteBtn[i]);
// // }

// // deleteBtn.forEach(function (element) {
// //   element.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('event__delete')) {
// //       let card = e.target.parentElement.parentElement.parentElement;
// //       console.log(card);
// //       main.removeChild(card);
// //     } else {
// //       console.log('error');
// //     }
// //   });
// // });

// // readBtn.forEach(function (element) {
// //   element.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('event__read')) {
// //       e.target.classList.toggle('event__read--active');
// //       if (e.target.classList.contains('event__read--active')) {
// //         e.target.textContent = 'Not read';
// //       } else {
// //         e.target.textContent = 'Read';
// //       }
// //     } else {
// //       console.log('error');
// //     }
// //   });
// // });
