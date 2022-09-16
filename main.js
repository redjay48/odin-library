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
const author = document.getElementById('authorText');
const noOfPages = document.getElementById('noOfPagesText');
const read = document.getElementById('readText');
const card = document.querySelector('.card');
const createButton = document.querySelector('#create');
const deleteButton = document.querySelector('#delete');
const cardDiv = document.getElementById('bookCards');

addButton.addEventListener('click', function () {
    if (formDiv.style.display === 'none') {
        formDiv.style.display = 'block';
    } else {
        formDiv.style.display = 'none';
    }
})

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    AddBooks();
})

function AddBooks() {
    let book = new Book(title.value, author.value, noOfPages.value, read.value);
    if (title.value !== '' && author.value !== '' && noOfPages.value !== '' && read.value !== '') {
        addBookToLibrary(book);
        document.querySelector('form').reset();
    }
}

function createCard() {
    for(let i = 0; i< myLibrary.length; i++) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title');
        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('card-author');
        const cardLower = document.createElement('div');
        cardLower.classList.add('card-lower');
        const cardTotalPages = document.createElement('p');
        cardTotalPages.classList.add('card-total-pages');
        const cardReadStatus = document.createElement('p');
        cardReadStatus.classList.add('card-read-status');
        cardDiv.appendChild(newCard);
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardLower);
        cardLower.appendChild(cardTotalPages);
        cardLower.appendChild(cardReadStatus);
    } 
}

createButton.addEventListener('click', createCard);

deleteButton.addEventListener('click', function () {
    cardDiv.lastChild.remove();
})

function displayCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        const cardArray = Array.from(cardDiv.children);
        cardArray[i].children[0].textContent = myLibrary[i].title;
        cardArray[i].children[1].textContent = myLibrary[i].author;
        cardArray[i].children[2].children[0].textContent = myLibrary[i].noOfPages;
        cardArray[i].children[2].children[1].textContent = myLibrary[i].readStatus;
    }
}