import express from "express";
const app = express();
app.use(express.json());

import { pool } from "./config/db.js";

const fQuery = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log(result.rows[0].now);
    } catch (error) {
        console.error(error.message);
    }
}
fQuery();

app.get("/equipment", async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM equipment")
        return res.json(result.rows);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error!"
        });
    }
app.post("/equipment", async (req,res) => {
        return res.status(400).json({
            error: "Missing required fields"
        VALUES ($1, $2, $3)

app.listen(3000, () => {
    console.log("app is running on port 3000");
});

