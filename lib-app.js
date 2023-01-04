let myLibrary = [];

function Book(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    read = '0',
    cover = '',
    isRead = false,
    isReading = false,
    bgColor = '',
    id = ''
) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = cover;
    this.isRead = isRead;
    this.isReading = isReading;
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
const createBookContainer = (book) => {
    element = document.createElement('div');
    element.classList.add('card');
    element.dataset.id = book.id; // ID assigned to book
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
    bookCover.style.backgroundColor = book.bgColor; // Book Cover random background color
    front.appendChild(bookCover);

    coverImage = document.createElement('img');
    coverImage.classList.add('cover-image');
    coverImage.setAttribute('src', '');
    bookCover.appendChild(coverImage);

    coverInfo = document.createElement('div');
    coverInfo.classList.add('cover-info');
    bookCover.appendChild(coverInfo);

    coverTitle = document.createElement('h1');
    coverTitle.classList.add('book-title');
    coverTitle.textContent = book.title; // Book Title

    coverAuthor = document.createElement('p');
    coverAuthor.classList.add('book-author');
    coverAuthor.textContent = book.author; // Book Author

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
    bookTitle.textContent = book.title; // Book Title
    bookInfo.appendChild(bookTitle);

    bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author; // Book Author
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
    pageInput.setAttribute('value', book.pages); // Book Pages
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
    readInput.setAttribute('value', book.read); // Read Pages
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

    if (book.isRead === true) {
        bookStatus.textContent = 'READ';
        colorCode.style.backgroundColor = 'rgba(34, 139, 34, 0.8)';
        spanIcons1.textContent = 'visibility';
    }
    
    if (book.isRead === false) {
        bookStatus.textContent = 'NOT READ';
        colorCode.style.backgroundColor = 'rgba(186, 0, 9, 0.8)';
        spanIcons1.textContent = 'visibility_off';
    } 
    
    if (book.isReading === true) {
        bookStatus.textContent = 'READING';
        colorCode.style.backgroundColor = 'rgba(30, 144, 255, 0.8)';
        spanIcons1.textContent = 'visibility';
    }

    let index = element.getAttribute('data-id'); // Get data id of the book
    let bookToChange = document.querySelector(`[data-id="${index}"]`); // Target the book that is going to change
    // console.log('data id', index)

    if (book.cover.name === '') {
        // console.log('book cover is empty')
        bookCover.removeChild(coverImage);
        coverInfo.appendChild(coverTitle);
        coverInfo.appendChild(coverAuthor);
    } else {
        // console.log('book cover is not empty')
        const reader = new FileReader();

        // Display cover image
        reader.addEventListener('load', () => {
            let coverImage = bookToChange.querySelector('.cover-image');
        
            // convert image file to base64 string
            coverImage.src = reader.result;
        }, false);

        if (book.cover) {
            reader.readAsDataURL(book.cover);
        }

        bookCover.removeChild(coverInfo);
    }

    // button to change book status
    button1.addEventListener('click', () => {
        let bookStatus = bookToChange.querySelector('.book-status');
        let colorCode = bookToChange.querySelector('.color-code');
        let spanIcons1 = bookToChange.querySelector('.material-icons-outlined');
        let readCount = bookToChange.querySelector('#read-count');
        let pageCount = bookToChange.querySelector('#page-count');

        if (bookStatus.textContent === 'NOT READ' || bookStatus.textContent === 'READING') {
            readCount.value = pageCount.value;
            myLibrary[index].read = pageCount.value;
            bookStatus.textContent = 'READ';
            colorCode.style.backgroundColor = 'rgba(34, 139, 34, 0.8)';
            spanIcons1.textContent = 'visibility';
            myLibrary[index].isRead = true;
        } else if (bookStatus.textContent === 'READ' || bookStatus.textContent === 'READING') {
            readCount.value = 0;
            myLibrary[index].read = '0';
            bookStatus.textContent = 'NOT READ';
            colorCode.style.backgroundColor = 'rgba(186, 0, 9, 0.8)';
            spanIcons1.textContent = 'visibility_off';
            myLibrary[index].isRead = false;
        }
    })

    // Button to remove book from library
    button3.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        bookShelves.removeChild(bookToChange);
    })
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
    bookFormTitle.textContent = 'Add New Book';
    submitFormBtn.textContent = 'Add Book';
}

function displayEditBookForm() {
    bookForm.reset(); // Reset form input when displaying the form
    cancelFormBtn.onclick = hideBookForm; // Activate the cancel button when displaying the form
    modalBookForm.style.display = 'flex';
    bookFormTitle.textContent = 'Edit Book';
    submitFormBtn.textContent = 'Update';
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

// Function to assign book status (READ, READING, NOT READ)
function assignBookStatus(data, book) {
    if (data.read === data.pages) { // READ
        book.isRead = true;
        book.isReading = false;
    } else if (data.read === '0') { // NOT READ
        book.isRead = false;
        book.isReading = false;
    } else if (data.read < data.pages || data.read > '0') { // READING
        book.isRead = false;
        book.isReading = true;
    }
}

// Function to assign a random book cover color
function assignBookCoverColor(book) {
    const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    book.bgColor = color;
}

// Function that loops to myLibrary array and updates the bookshelves
function updatesBookshelves() {
    resetBookshelves(); // Bug fix (repeated books on the bookshelves)
    for (let i = 0; i < myLibrary.length; i++) {
        createBookContainer(myLibrary[i]);
        // console.log('loop', myLibrary[i]);
    }
}

// Function to remove the bookshelves content
function resetBookshelves() {
    bookShelves.innerHTML = '';
    createAddNewBookBtn();
    addNewBook();
}

// Book form event listener at submit
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(bookForm); // Create an empty FormData and populate it from the book form input
    const bookData = Object.fromEntries(fd); // Transforms a list of key-value pairs into an object
    const newBook = new Book(bookData.title, bookData.author, bookData.pages, bookData.read, bookData.cover); // Create a new book object from the book constructor and get the key-value pairs from the book data

    addBookToLibrary(newBook);
    assignBookID(newBook);
    assignBookStatus(bookData, newBook);
    assignBookCoverColor(newBook);
    updatesBookshelves();

    console.log(newBook);
    console.log('My Library', myLibrary);

    hideBookForm();
})

// Load Add New Book Button
window.onload = () => {
    createAddNewBookBtn();
    addNewBook();
}