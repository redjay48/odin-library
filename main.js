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
const title = document.getElementById('titleText');
const author =  document.getElementById('authorText');
const noOfPages = document.getElementById('noOfPagesText');
const read = document.getElementById('readText');


addButton.addEventListener('click', function() {
    if(formDiv.style.display === 'none') {
        formDiv.style.display = 'block';
    } else {
        formDiv.style.display = 'none';
    }
})

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    let book = new Book(title.value, author.value, noOfPages.value, read.value);
    if(title.value !== '' && author.value !== '' && noOfPages.value !== '' && read.value !== '') {
        addBookToLibrary(book);
        document.querySelector('form').reset();
    }
    
})
