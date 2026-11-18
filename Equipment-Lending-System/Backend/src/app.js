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
        return res.json(result.rows);
        });

app.listen(3000, () => {
    console.log("app is running on port 3000");
});

