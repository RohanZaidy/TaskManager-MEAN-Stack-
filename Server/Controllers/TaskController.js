let TaskModel = require('../Models/Task.model');

let AddTask = async (req,res)=>{
    let { title, listId } = req.body;  
    let newTask = new TaskModel({
        title: title,
        listId: listId
    });
    await newTask.save();
    res.json({message: "Task added successfully", data: newTask});
}


let getTasks = async (req,res)=>{
    let Tasks = await TaskModel.find({listId: req.params.id});
    res.json(Tasks);
}

let deleteTask = async (req,res)=>{
    let task = await TaskModel.findByIdAndDelete(req.params.id);
    if(!task)
    {
        return res.status(404).json({message: "Task not found"});
    }
    res.json({message: "Task deleted successfully"});
}

module.exports = {AddTask, getTasks, deleteTask};