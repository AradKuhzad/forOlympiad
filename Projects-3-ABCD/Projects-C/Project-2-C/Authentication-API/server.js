import express from "express";
const app = express();

app.use(express.json());

import bcrypt from "bcrypt";
import { readFile, writeFile } from "fs/promises"

app.post("/register", async (req,res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Fill it!"
        })
        return;
    }
    const data = await readFile("users.json", "utf-8");
    const fjson = JSON.parse(data);

    const existingUser = fjson.find(u => u.username === user.username);
    if (existingUser) {
        return;
    }

    message: "User registered successfully!"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
