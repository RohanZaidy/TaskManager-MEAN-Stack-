let mongoose = require('mongoose');

let TaskSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        default: false
    },
    listId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "List"
    }
});

let TaskModel = mongoose.model("Task",TaskSchema)
module.exports = TaskModel;