import express from 'express';
import mongoose from 'mongoose';
import useRouter from "./Route/userRoute.js";
import todoRouter from "./Route/todoRoute.js";
const app = express();
app.use(express.json());




mongoose.connect(`mongodb://localhost:27017/todo_data`).then(()=>{
    app.listen(8081, () => {
  console.log("Server Started on port 8000");
});
});
app.use("/api/users/",useRouter);
app.use("/api/todo",todoRouter);



