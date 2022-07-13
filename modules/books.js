 class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const bookObj = {
      allbook: [],
    };
    if (JSON.parse(localStorage.getItem('books')) == null) {
      localStorage.setItem('books', JSON.stringify(bookObj));
    }

    const obj = JSON.parse(localStorage.getItem('books'));
    if (this.title.value !== '' && this.author.value !== '') {
      obj.allbook.push({
        title: this.title,
        author: this.author,
      });
    }
    localStorage.setItem('books', JSON.stringify(obj));
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      const text = el.parentElement.parentElement.firstChild.innerText.split('.')[0];
      el.parentElement.parentElement.remove();
      const obj = JSON.parse(localStorage.getItem('books'));
      const books = { allbook: [] };
      obj.allbook.forEach((el) => {
        if (`"${el.title}` !== text) {
          books.allbook.push(el);
        }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default Book;