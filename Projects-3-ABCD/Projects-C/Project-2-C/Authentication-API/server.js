import express from "express";
const app = express();

app.use(express.json());

import bcrypt from "bcrypt";

app.post("/register", async (req,res) => {

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

