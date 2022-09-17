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

const addButton = document.querySelector('#addBooks');
const formDiv = document.querySelector('.formDiv');
const submitButton = document.querySelector('#submit');
const title = document.getElementById('titleText');
const author = document.getElementById('authorText');
const noOfPages = document.getElementById('noOfPagesText');
const read = document.getElementById('readText');
const card = document.querySelector('.card');
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
    displayCard();
})

function AddBooks() {
    let book = new Book(title.value, author.value, noOfPages.value, read.value);
    if (title.value !== '' && author.value !== '' && noOfPages.value !== '' && read.value !== '') {
        addBookToLibrary(book);
        document.querySelector('form').reset();
        createCard();
    }
}

function createCard() {
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
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = "Delete Book";
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle');
        toggleButton.textContent = 'Toggle Read Status';
        cardDiv.appendChild(newCard);
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardLower);
        newCard.appendChild(deleteButton);
        newCard.appendChild(toggleButton);
        cardLower.appendChild(cardTotalPages);
        cardLower.appendChild(cardReadStatus);
        deleteButton.addEventListener('click', function (e) {
            e.target.parentNode.remove();
        })
        toggleButton.addEventListener('click', function (e) {
            const readStatus = e.target.parentNode.children[2].children[1];
            if (readStatus.textContent === 'Not Read') {
                readStatus.textContent = 'Read';
                readStatus.style.color = 'green';
            } else if (readStatus.textContent === 'Read') {
                readStatus.textContent = 'Reading';
                readStatus.style.color = 'orange';
            } else if (readStatus.textContent === 'Reading'){
                readStatus.textContent = 'Not Read';
                readStatus.style.color = 'red';
            }
        })
    }



function displayCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        const cardArray = Array.from(cardDiv.children);
        cardArray[i].children[0].textContent = myLibrary[i].title;
        cardArray[i].children[1].textContent = myLibrary[i].author;
        cardArray[i].children[2].children[0].textContent = `${myLibrary[i].noOfPages} Pages`;
        cardArray[i].children[2].children[1].textContent = myLibrary[i].readStatus;
        if (cardArray[i].children[2].children[1].textContent === 'Not Read') {
            cardArray[i].children[2].children[1].style.color = 'red';
        } else if (cardArray[i].children[2].children[1].textContent === 'Read') {
            cardArray[i].children[2].children[1].style.color = 'green';
        } else if (cardArray[i].children[2].children[1].textContent === 'Reading'){
            cardArray[i].children[2].children[1].style.color = 'orange';
        }    }
    
}
