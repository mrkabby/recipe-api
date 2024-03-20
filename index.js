import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
import recipeRoute from "./routes/recipes.routes.js";
import dotenv from "dotenv"

dotenv.config({ path: ['.env.local'] })


//create express app
const app = express();

// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


// use routes
app.use(recipeRoute);

// make database connection
await mongoose.connect(process.env.MONGO_URI);

//listen for incoming requests
app.listen(6000, () => {
    console.log("Express app is running!")
});