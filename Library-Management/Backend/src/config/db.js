import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./database/library.db");


   db.exec("DROP TABLE IF EXISTS books");

   db.exec(`
    CREATE TABLE books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(30),
        category VARCHAR(50) NOT NULL,
        available TEXT DEFAULT 'Yes'
            CHECK (available IN ('Yes', 'No')) NOT NULL
    )
`);

export { db };

const result = db.prepare(`
    SELECT name FROM sqlite_master
    WHERE TYPE = 'table'
    `);
    console.log(result.all());
