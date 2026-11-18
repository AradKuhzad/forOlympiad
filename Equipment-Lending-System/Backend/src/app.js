import express from "express";
const app = express();
app.use(express.json());

import { pool } from "./config/db.js";

const fQuery = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.error(error.message);

app.listen(3000, () => {
    console.log("app is running on port 3000");
});

