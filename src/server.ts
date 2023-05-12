import mongoose from "mongoose";
import colors from "colors";
import app from "./app";

const PORT = process.env.PORT || 5000;


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
        console.log(`🐴 db connected succesfully`);

        app.listen(PORT, () => {
            try {
                console.log(`server is successfully running on port ${PORT}!`);
            } catch (error) {
                console.log(error.message);
            };
        });

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log(error);
    }
}

main();


app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});

