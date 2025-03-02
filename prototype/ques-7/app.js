const books = require("./books");
const bookSummaries = books.map(book => book.getSummary());
console.log(bookSummaries);
