import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cover:{
        type:String,
        required:true
    }
},{timestamps:true})

const Book = mongoose.model("book", bookSchema);
export default Book;