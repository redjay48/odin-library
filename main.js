let myLibrary = [];

function Book(title, author, noOfPages, readStatus) {
    this.author = author
    this.title = title
    this.noOfPages = noOfPages
    this.readStatus = readStatus
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('harry potter', 'jk rowling', '670', 'read');

const addButton = document.querySelector('#addBooks');
const formDiv = document.querySelector('.formDiv');
const submitButton = document.querySelector('#submit');
const title = document.querySelector('#titleText');
const author =  document.querySelector('#authorText');
const noOfPages = document.querySelector('noOfPagesText');
const read = document.querySelector('#readText')
const form = document.getElementsByTagName('form')


addButton.addEventListener('click', function() {
    if(formDiv.style.display === 'none') {
        formDiv.style.display = 'block';
    } else {
        formDiv.style.display = 'none';
    }
})

submitButton.addEventListener('click', function() {
    let newBook = new Book(title.value, author.value, noOfPages.value, read.value);
    console.log(newBook);
})
