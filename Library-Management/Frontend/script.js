const booksList = document.querySelector("#books-list");
const bookForm = document.querySelector("#book-form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const categoryInput = document.querySelector("#category");

// GET: Fetch all books
async function getBooks() {
    try {
        const response = await fetch("/books");

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const books = await response.json();

        booksList.innerHTML = "";

        books.forEach((book) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            const title = document.createElement("h3");
            title.textContent = book.title;

            const author = document.createElement("p");
            author.textContent = `Author: ${book.author}`;

            const category = document.createElement("p");
            category.textContent = `Category: ${book.category}`;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-btn");

            editButton.addEventListener("click", () => {
                updateBook(book);
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", () => {
                deleteBook(book.id);
            });

            const actions = document.createElement("div");
            actions.classList.add("book-actions");

            actions.append(editButton, deleteButton);

            bookElement.append(title, author, category, actions);
            booksList.append(bookElement);
        });

    } catch (error) {
        console.error(error);
    }
}

// POST: Add a new book
bookForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newBook = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        category: categoryInput.value.trim()
    };

    try {
        const response = await fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) {
            throw new Error("Failed to add book");
        }

        bookForm.reset();
        getBooks();

    } catch (error) {
        console.error(error);
    }
});

// DELETE: Delete a book
async function deleteBook(id) {
    try {
        const response = await fetch(`/books/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete book");
        }

        getBooks();

    } catch (error) {
        console.error(error);
    }
}

// PUT: Update a book
async function updateBook(book) {
    const title = prompt("Enter the new title:", book.title);
    if (title === null) return;

    const author = prompt("Enter the new author:", book.author);
    if (author === null) return;

    const category = prompt("Enter the new category:", book.category);
    if (category === null) return;

    try {
        const response = await fetch(`/books/${book.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title.trim(),
                author: author.trim(),
                category: category.trim()
            })
        });

        if (!response.ok) {
            throw new Error("Failed to update book");
        }

        getBooks();

    } catch (error) {
        console.error(error);
    }
}

getBooks();
