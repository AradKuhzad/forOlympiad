import { DatabaseSync } from "node:sqlite";
   db.exec("DROP TABLE IF EXISTS books");

    CREATE TABLE books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category VARCHAR(50) NOT NULL,
`);
