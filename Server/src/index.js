import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => { 
            console.log(`Server is running on url http://localhost:${process.env.PORT}`);
        })
        app.on("error", (err) => {
            console.log(`Server is running on url http://localhost:${process.env.PORT}`);
            throw err;
        })
    })
    .catch(
        (err) => {
            console.log("MONGODB connection failed !!!", err);
            process.exit(1);
        }
    );