import express from "express";
import { readFile, writeFile } from "fs/promises";
const app = express();
app.use(express.json());
app.use(express.static("public"));


app.get("/notes", async (req,res) => {
    const fregister = await readFile("notes.json", "utf-8");
    const notes = JSON.parse(fregister);
    res.json(notes);
})
app.post("/notes", async (req, res) => {
    const fpost = await readFile("notes.json", "utf-8");
    const readiJN = JSON.parse(fpost);
    const posts = {
        text: req.body.text
    readiJN.push(posts);
    const addtJN = JSON.stringify(readiJN);
    const fadd =  await writeFile("./notes.json", addtJN);
    res.status(201).json(posts);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

