let myLibrary = [
    {
        title: 'harry potter',
        author: 'jk rowling',
        noOfPages: 360,
        readStatus: 'read'
    }, {
        title: 'harry potter 2',
        author: 'j.k rowling',
        noOfPages: 450,
        readStatus: 'not read'
    }, {
        title: 'harry potter 3',
        author: 'j.k. rowling',
        noOfPages: 556,
        readStatus: 'not read'
    }];

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
const card = document.querySelector('.card');
const createButton = document.querySelector('#create');
const deleteButton = document.querySelector('#delete');
const cardDiv = document.querySelector('#book-cards');
const cardTitle = document.querySelector('.card-title');
const cardAuthor = document.querySelector('.card-author');
const cardTotalPages = document.querySelector('.card-total-pages');
const cardReadStatus = document.querySelector('.card-read-status');

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

createButton.addEventListener('click', function() {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    cardDiv.appendChild(newCard);
    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardTotalPages);
    newCard.appendChild(cardReadStatus);
})

deleteButton.addEventListener('click', function() {
    cardDiv.lastChild.remove();
})

for (let i = 0; i < myLibrary.length; i++) {
    
}