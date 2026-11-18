import { db } from "./config/db.js"; 
import express from "express";
const app = express();
app.get("/books", (req,res) => {
        const result = db.prepare("SELECT * FROM books").all();
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error!"

app.post("/books", (req,res) => {
    const { title, author, category} = req.body;
    if (!title || !category) {
        return res.status(400).json({
            error: "Missing required fields"
    try {
        const SQL = `INSERT INTO books (title, author, category)
        RETURNING *`;
        const result = db.prepare(SQL).get(title, author, category);
        return res.status(201).json({
            message: "It's work successfully!",
            book: result
    } catch (error) {
            error: "It doesn't work!"
        console.log(error.message);
