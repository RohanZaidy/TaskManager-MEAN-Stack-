let ListModel = require('../Models/List.model');
let TaskModel = require('../Models/Task.model');
let getLists = async (req,res)=>{
    let Lists = await ListModel.find();
    res.json(Lists);
}

let createList = async (req,res)=>{
    let {name} = req.body;
    let newList = new ListModel({
        name: name
    });
    await newList.save();
    res.json({message: "List created successfully",data: newList});
}

let updateList = async (req, res) => {
    try {
        const { name, id } = req.body;  
        let list = await ListModel.findByIdAndUpdate(
            id,            
            { name: name }, 
            { new: true }   
        );

        if (!list) {
            return res.status(404).json({ message: "List not found" });
        }

        res.json({ message: "List updated successfully", data: list });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};


let deleteList = async (req,res)=>{
       
    let list = await ListModel.findByIdAndDelete(req.params.id);
    if(!list)
    {
        return res.status(404).json({message: "List not found"});
    }
    await TaskModel.deleteMany({ listId: req.params.id });
    res.json("List deleted successfully");
}

module.exports = {getLists,createList,updateList,deleteList};