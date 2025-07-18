import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "../Models/userModel.js";
import express from "express";
const app=express();
app.use(express.json()); 
const register=async(req,res)=>{
    try{
        const{email, password}=req.body;
        const hashpass= await bcrypt.hash(password,10);
        const user={
            email,
            password:hashpass
        }
        const result=await userModel.create(user);
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({message:"something went wrong"});

    }
}
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const existingUser= await userModel.findOne({email});
        if(existingUser){
            const ismatch= await bcrypt.compare(password,existingUser.password);
            if(ismatch){
                res.status(200).json({message:"login successful"});

            }
            else{
                res.status(400).json({message:"invalid credentials"});
                
            }

        }
        else{
            res.status(400).json({message:"User Not Found"});
        }




    } catch(err){
        console.log(err);
        res.status(500).json({message:"something went wrong"});
    }

};
export{
    register,
    login
}

