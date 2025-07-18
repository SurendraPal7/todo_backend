import express from "express"
const Router=express.Router()
import{
    addTodo,
    getTodo,
    deleteTodo,
    update

} from "../Controllers/totocontroller.js";
Router.post("/add",addTodo);
Router.get("/get",getTodo);
Router.delete("/delete/:id",deleteTodo);
Router.patch("/update/:id",update);
export default Router;