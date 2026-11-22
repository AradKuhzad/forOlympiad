import { db } from "./config/db.js"; 
import express from "express";
const app = express();
app.use(express.json());

import path from "node:path";
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "../../Frontend")));

app.get("/books", (req,res) => {
    try {
        const result = db.prepare("SELECT * FROM books").all();
        return res.json(result);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error!"
        })
    }
});

app.post("/books", (req,res) => {
    const { title, author, category} = req.body;
    if (!title || !category) {
        return res.status(400).json({
            error: "Missing required fields"
        });
    }
    try {
        const SQL = `INSERT INTO books (title, author, category)
        VALUES (?, ?, ?)
        RETURNING *`;
        const result = db.prepare(SQL).get(title, author, category);
        return res.status(201).json({
            message: "It's work successfully!",
            book: result
        })   
    } catch (error) {
        res.status(500).json({
            error: "It doesn't work!"
        })
        console.log(error.message);
    }

});

app.delete("/books/:id", (req,res) => {
    const id = req.params.id;
    const resultfd = db.prepare(
        "DELETE FROM books WHERE id = ?"
    ).run(id);
    if (resultfd.changes > 0) {
        res.status(200).json({
            message: "It works successfully"
        })
    } else {
        res.status(404).json({
            error: "It doesn't work!"
        })
                error: "Book not found"
            });
        }

        return res.status(200).json({
            message: "Book updated successfully"
        });

    } catch (error) {
        console.error(error.message);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});