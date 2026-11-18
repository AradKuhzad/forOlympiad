import { db } from "./config/db.js"; 
import express from "express";
const app = express();
app.get("/books", (req,res) => {
        return res.status(500).json({
    if (!title || !category) {
            error: "Missing required fields"
        const SQL = `INSERT INTO books (title, author, category)
        const result = db.prepare(SQL).get(title, author, category);
