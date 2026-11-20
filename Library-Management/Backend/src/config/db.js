import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./database/library.db");


   db.exec(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(30),
        category VARCHAR(50) NOT NULL,
        available TEXT DEFAULT 'Yes'
            CHECK (available IN ('Yes', 'No')) NOT NULL
    )
`);

export { db };
