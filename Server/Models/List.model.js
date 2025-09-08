let mongoose = require('mongoose');

let ListSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

let ListModel = mongoose.model("List",ListSchema)
module.exports = ListModel;