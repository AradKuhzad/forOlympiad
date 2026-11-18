import { db } from "./config/db.js"; 
import express from "express";
const app = express();
        return res.status(500).json({
    if (!title || !category) {
        const SQL = `INSERT INTO books (title, author, category)
        const result = db.prepare(SQL).get(title, author, category);
