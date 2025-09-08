let express = require('express');
let { AddTask, getTasks , deleteTask} = require('../Controllers/TaskController');
let Taskrouter = express.Router();

Taskrouter.post('/add-task', AddTask);
Taskrouter.get('/:id', getTasks);
Taskrouter.delete('/delete-task/:id', deleteTask);

module.exports = Taskrouter;