const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`🐴 db connected succesfully`.white.bgRed.bold)

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log(error);
    }
}

main();

app.get("/", (req, res) => {
    try {
        res.send("Welcome to Mongoose Server");
    } catch (error) {
        console.log(error.message);
    };
});

app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});


app.listen(PORT, () => {
    try {
        console.log(`server is successfully running on port ${PORT}!`.white.bold);
    } catch (error) {
        console.log(error.message);
    };
});