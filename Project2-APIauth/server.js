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
    const array = JSON.parse(data);
    const exists = array.some((user) => {
        return user.username === username;
    });
    if (exists) {
        return res.status(409).json({
            message: "Username already exists!"
        })
    }

    array.push(newuser);
    const jsondata = JSON.stringify(array, null, 2);

    writeFile("users.json", jsondata, "utf-8", (error) => {
        if (error) {
            return res.status(500).json({
                message: "Error saving user"
            });
        }

          res.json({
          message: "User registered successfully"
        });
      });
   });
});

 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




