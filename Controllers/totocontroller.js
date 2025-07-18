import mongoose from "mongoose";
import todoModel from "../Models/todoModel.js";
const addTodo=async(req, res)=>{
    try{
        const {task, userId}=req.body;
        const todo={
            task,
            userId

        }
        const result=await todoModel.create(todo);
        res.status(201).json(result);

         
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something Went wrong"});


    }
};

const getTodo=async(req, res)=>{
    try{
        const Id=req.params.userId;
        const result= await todoModel.findone({useId:Id});
        res.status(200).json(result);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});

    }

        

}
const update = async(req, res)=>{
    try{
        const id=req.params.id;
        const body= req.body;
        const result= await todoModel.findByIdAndUpdate({useId,body});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}
const deleteTodo=async(req, res)=>{
    try{
        const id=req.params.id;
        const result= await todoModel.findByIdAndDelete({useId:id});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }

}
export{
    addTodo,
    getTodo,
    update,
    deleteTodo

}


//add
//get
//update
//delete




