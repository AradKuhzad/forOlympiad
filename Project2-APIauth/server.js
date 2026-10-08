import { error } from "console";
import express from "express";
import { readFile, writeFile } from "fs";
const app = express();
app.use(express.json());

app.post("/register", (req,res) => {
    const { username, password } = req.body;

    const newuser = {
    username,
    password
    };

    readFile("users.json", "utf-8", (error, data) => {
        if (error) {
            return res.status(500).json({
                message: "Error reading users file"
            });
        };

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