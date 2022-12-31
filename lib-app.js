let myLibrary = [];

function Book(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    read = '0',
    isRead = false,
    isReading = false,
    cover = '',
    bgColor = '',
    id = ''
) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = isRead;
    this.isReading = isReading;
    this.cover = cover;
    this.bgColor = bgColor;
    this.id = id;
}

function addBookToLibrary() {
    // do stuff here
}

// UI Element
const bookShelves = document.getElementById('book-shelves');
const modalBookForm = document.querySelector('#modal');
const bookForm = document.querySelector('form');
const bookFormTitle = document.querySelector('.form-title');
const bookFormInput = document.querySelectorAll('input');
const cancelFormBtn = document.querySelector('.form-cancel-button');
const submitFormBtn = document.querySelector('.form-add-button');