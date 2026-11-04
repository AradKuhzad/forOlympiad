import express from "express";
import { readFile, writeFile } from "fs/promises";
const app = express();
app.use(express.json());
app.use(express.static("public"));


app.get("/notes", async (req,res) => {
    const fregister = await readFile("notes.json", "utf-8");
    res.json(notes);
})
    const posts = {
        text: req.body.text
    const fadd =  await writeFile("./notes.json", addtJN);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

