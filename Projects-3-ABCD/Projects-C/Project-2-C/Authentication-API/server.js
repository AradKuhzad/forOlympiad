import express from "express";
const app = express();

app.use(express.json());

import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";

import { readFile, writeFile } from "fs/promises";


const scryptAsync = promisify(scrypt);

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
        res.status(409).json({
            message: "Your username has been used!"
        })
        return;
    }

    const salt = randomBytes(16);
    const key = await scryptAsync(user.password, salt, 64);
    
    const newUser = {
        username: user.username, 
        password: key.toString("hex"),
        salt: salt.toString("hex")
    }
    fjson.push(newUser);
    const addtjsn = JSON.stringify(fjson, null, 2);
    await writeFile("./users.json", addtjsn);

    res.status(201).json({
    message: "User registered successfully!"
    });
});

app.post("/login", async (req,res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    const tjson = JSON.parse(data);
    if (!foundUser) { 
        res.status(401).json({
            message: "Invalid username or password"
    });
    return;
  }
  const salt = Buffer.from(foundUser.salt, "hex");
  const key = await scryptAsync(user.password, salt, 64);
})


    app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


