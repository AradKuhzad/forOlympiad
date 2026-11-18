import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./database/library.db");
   db.exec("DROP TABLE IF EXISTS books");

   db.exec(`
    CREATE TABLE books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category VARCHAR(50) NOT NULL,
            CHECK (available IN ('Yes', 'No')) NOT NULL
