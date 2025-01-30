import Book from "../models/book.model.js";
import mongoose from "mongoose";

export const newBook =async(req,res)=>{
    const book = req.body
    if(!book.title || !book.author || !book.price || !book.cover){
        return res.status(400).json({success:false,message:"Please provide all fields"});
    }

    const newBook = new Book(book)

    try{
      await newBook.save();
      res.status(201).json({success:true , data: newBook})
    } catch(error){
      console.log("error in creating :",error.message)
      res.status(500).json({success:false,message:"server error"})
    }
}

export const getBook = async(req,res)=>{
    try{
      const books = await Book.find({})
      res.status(200).json({success:true , data:books})
  
    }catch(error){
      console.log("error getting boog:", error.message )
      res.status(500).json({success:false,message:"server error"})
    }
  }

export const getSingleBook =async(req,res)=>{
  const {id} = req.params  
  try{
    const book = await Book.findById(id);
    res.status(200).json({success:true , data:book})
      
    }catch(error){
     res.status(500).json({success:false , message:"server error"})
    }
}

export const updateBook = async (req,res)=>{
    const {id} = req.params
    const book = req.body
  
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false , message:"Invalid book id"})
    }
  
    try{
    const updateBook = await Book.findByIdAndUpdate(id,book ,{new:true})
  
    res.status(200).json({success:true , data:updateBook})
   
  
    }catch(error){
      res.status(500).json({success:false , message:"server error"})
    }
  }


  export const deleteBook =  async (req,res)=>{
    const {id} = req.params
    try{
    await Book.findByIdAndAndDele(id)
    res.status(200).json({success:true , message:"book deleted successfully"})
    }catch(error){
    res.status(500).json({success:false , message:"server error"})
    }
  }