//taskn status user id
import mongoose  from "mongoose";
const todoSchema= mongoose.Schema(
    {
        task:{type:String},
        status:{type:String,default:"Active"},
        userId:{type:Number},
},
{timeStamp:true},
)
export default mongoose.model("todo_data",todoSchema);
