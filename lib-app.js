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

// Add new book object to myLibrary array
function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

// UI Element
const bookShelves = document.getElementById('book-shelves');
const modalBookForm = document.querySelector('#modal');
const bookForm = document.querySelector('form');
const bookFormTitle = document.querySelector('.form-title');
const bookFormInput = document.querySelectorAll('input');
const cancelFormBtn = document.querySelector('.form-cancel-button');
const submitFormBtn = document.querySelector('.form-add-button');

// Create a HTML add new book button
const createAddNewBookBtn = () => {
    element = document.createElement('button');
    element.classList.add('add-book');
    element.setAttribute('type', 'button');
    bookShelves.appendChild(element);

    buttonIcon = document.createElement('span');
    buttonIcon.classList.add('material-icons-round');
    buttonIcon.textContent = 'add_circle';
    element.appendChild(buttonIcon);
}

// Create a HTML Book Container
const createBookContainer = () => {
    element = document.createElement('div');
    element.classList.add('card');
    element.dataset.id = '';
    bookShelves.appendChild(element);

    cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    element.appendChild(cardContent);

    //Book Front
    front = document.createElement('div');
    front.classList.add('front');
    cardContent.appendChild(front);

    bookCover = document.createElement('div');
    bookCover.classList.add('book-cover');
    bookCover.style.backgroundColor = ''; // Book Cover random background color
    front.appendChild(bookCover);

    coverImage = document.createElement('img');
    coverImage.classList.add('cover-image');
    coverImage.setAttribute('src', 'assets/images/413V3sIKSJL._SX331_BO1,204,203,200_.jpg');
    bookCover.appendChild(coverImage);

    coverInfo = document.createElement('div');
    coverInfo.classList.add('cover-info');

    coverTitle = document.createElement('h1');
    coverTitle.classList.add('book-title');
    coverTitle.textContent = ''; // Book Title

    coverAuthor = document.createElement('p');
    coverAuthor.classList.add('book-author');
    coverAuthor.textContent = ''; // Book Author

    colorCode = document.createElement('div');
    colorCode.classList.add('color-code');
    colorCode.style.backgroundColor = 'rgba(186, 0, 9, 0.8)'; // Book Color Code
    bookCover.appendChild(colorCode);

    bookStatus = document.createElement('h3');
    bookStatus.classList.add('book-status');
    bookStatus.textContent = 'NOT READ'; // Book Status
    colorCode.appendChild(bookStatus);

    //Book Back
    back = document.createElement('div');
    back.classList.add('back');
    cardContent.appendChild(back);

    bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    back.appendChild(bookInfo);

    bookTitle = document.createElement('h1');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = 'The Hobbit'; // Book Title
    bookInfo.appendChild(bookTitle);

    bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = 'J.R.R. Tolkien'; // Book Author
    bookInfo.appendChild(bookAuthor);

    inputPages = document.createElement('div');
    inputPages.classList.add('input-pages');
    bookInfo.appendChild(inputPages);

    bookPages = document.createElement('div');
    bookPages.classList.add('book-pages');
    inputPages.appendChild(bookPages);

    pageLabel = document.createElement('label');
    pageLabel.setAttribute('for', 'page-count');
    pageLabel.textContent = 'Book Pages';
    bookPages.appendChild(pageLabel);

    pageInput = document.createElement('input');
    pageInput.setAttribute('type', 'text');
    pageInput.setAttribute('name', 'page-count');
    pageInput.setAttribute('id', 'page-count');
    pageInput.setAttribute('value', '400'); // Book Pages
    pageInput.setAttribute('readonly', '');
    bookPages.appendChild(pageInput);

    readPages = document.createElement('div');
    readPages.classList.add('read-pages');
    inputPages.appendChild(readPages);

    readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'read-count');
    readLabel.textContent = 'Read Pages';
    readPages.appendChild(readLabel);

    readInput = document.createElement('input');
    readInput.setAttribute('type', 'text');
    readInput.setAttribute('name', 'read-count');
    readInput.setAttribute('id', 'read-count');
    readInput.setAttribute('value', '20'); // Read Pages
    readInput.setAttribute('readonly', '');
    readPages.appendChild(readInput);

    controlButton = document.createElement('div');
    controlButton.classList.add('control-btn');
    bookInfo.appendChild(controlButton);

    button1 = document.createElement('a');
    button1.classList.add('status-btn'); // read-not_read-btn
    button1.setAttribute('href', '#');
    controlButton.appendChild(button1);

    spanIcons1 = document.createElement('span');
    spanIcons1.classList.add('material-icons-outlined');
    spanIcons1.textContent = 'visibility';
    button1.appendChild(spanIcons1);

    button2 = document.createElement('a');
    button2.classList.add('edit-btn')
    button2.setAttribute('href', '#');
    controlButton.appendChild(button2);

    spanIcons2 = document.createElement('span')
    spanIcons2.classList.add('material-icons-outlined');
    spanIcons2.textContent = 'edit';
    button2.appendChild(spanIcons2);
    
    button3 = document.createElement('a');
    button3.classList.add('delete-btn');
    button3.setAttribute('href', '#');
    controlButton.appendChild(button3);

    spanIcons3 = document.createElement('span');
    spanIcons3.classList.add('material-icons-outlined');
    spanIcons3.textContent = 'delete';
    button3.appendChild(spanIcons3);
}

// Function to hide the book form
function hideBookForm() {
    modalBookForm.style.display = 'none';
}

// Function to display form
function displayAddBookForm() {
    bookForm.reset(); // Reset form input when displaying the form
    cancelFormBtn.onclick = hideBookForm; // Activate the cancel button when displaying the form
    modalBookForm.style.display = 'flex';
}

// Function to activate add new book button to display the form
function addNewBook() {
    const addBookBtn = document.querySelector('.add-book');
    addBookBtn.onclick = displayAddBookForm;
}

// Function to assign an id to new book
function assignBookID(book) {
    const newBookID = myLibrary.indexOf(book);
    book.id = newBookID;
}

// Book form event listener at submit
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(bookForm); // Create an empty FormData and populate it from the book form input
    const bookData = Object.fromEntries(fd); // Transforms a list of key-value pairs into an object
    const newBook = new Book(bookData.title, bookData.author, bookData.pages, bookData.read); // Create a new book object from the book constructor and get the key-value pairs from the book data

    addBookToLibrary(newBook);
    assignBookID(newBook);

    console.log(newBook);
    console.log('My Library', myLibrary);
})

// Load Add New Book Button
window.onload = () => {
    createAddNewBookBtn();
    addNewBook();
}