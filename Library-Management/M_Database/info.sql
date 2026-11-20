CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(30) NOT NULL, 
    category VARCHAR(50) NOT NULL, 
   available TEXT DEFAULT 'Yes'
   CHECK (available IN ('Yes', 'No')) NOT NULL
);

DELETE FROM books;