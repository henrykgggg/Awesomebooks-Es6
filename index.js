import Book from "./modules/books.js";

const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksList = document.querySelector('#book-list');

const display = () => {
    const obj = JSON.parse(localStorage.getItem('books'));
    if (obj !== undefined) {
      // Added below and added a fullstop to separate title
      booksList.innerHTML = '';
      obj.allbook.forEach((item) => {
        booksList.innerHTML += `
              <td>${'"'}${item.title}${'."'}${' '}${'By'}${' '}${item.author}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
              `;
      });
    }
  };

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newBook = new Book(bookTitle.value, bookAuthor.value);
    if (bookTitle.value !== '' && bookAuthor.value !== '') {
      newBook.add();
      bookTitle.value = '';
      bookAuthor.value = '';
      display();
    }
  });
  
  document.querySelector('#book-list').addEventListener('click', (e) => {
    Book.deleteBook(e.target);
  });

  getDate.displayLuxon();

  const newBook = document.getElementById('newbookLi');
  const myForm = document.getElementById('myForm');
  const myBookList = document.getElementById('bookList');
  const myList = document.getElementById('list');
  const myHome = document.getElementById('home');
  const myContact = document.getElementById('contacts');
  const contactNavLink = document.getElementById('contactNavLi');
  
