import express from "express";
const app = express();

app.use(express.json());

import bcrypt from "bcrypt";

app.post("/register", async (req,res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Fill it!"
        })
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
