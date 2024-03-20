class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Genre: ${this.genre}`);
    }
  }
  
  async function processBooks(data) {
    let bookMap = new Map();
  
    for (let i = 0; i < data.length; i++) {
      const {title,author,genre } = data[i];
      // const {
      //   title,
      //   author,
      //   genre
      // } = data[i];
      const book = new Book(title, author, genre);
  
      bookMap.set(i + 1, book);
      await delay(1000); // Simulating asynchronous operation
    }
  
    bookMap.forEach((book, id) => {
      console.log(`Book ID: ${id}`);
      book.displayInfo();
    });

    // console.log(bookMap)
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const jsonData = {
    "books": [{
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic Fiction"
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Literary Fiction"
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian Fiction"
      }
    ]
  };
  
  processBooks(jsonData.books);