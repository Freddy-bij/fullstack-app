import express from "express";
import { connnectDB } from "./config/db.js";

import bookRouter from "./routes/book.route.js";

const app = express();
app.use(express.json())
import  dotenv  from "dotenv";
dotenv.config()

app.use("/api/books" , bookRouter)


app.listen(4000, async ()=>{
    await connnectDB();
    console.log("server started at http://locahost:4000" )
})