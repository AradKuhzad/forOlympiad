import { error } from "console";
import express from "express";
const app = express();
app.use(express.json());

app.post("/register", (req,res) => {
    const { username, password } = req.body;

    res.json({
        message: "User registered successfully"
    });
});
 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

import fs, { readFile } from "fs";
readFile("users.json", "utf-8", (error, data) => {
    
})