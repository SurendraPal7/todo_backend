import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema= mongoose.Schema(
    {
    email:{type:String},
    password:{type:String},
    },
    {timeStamp:true},


)
export default mongoose.model("User",userSchema);
