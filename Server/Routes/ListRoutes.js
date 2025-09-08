let { getLists, createList , updateList , deleteList} = require('../Controllers/ListController');
let express = require('express');
let Listrouter = express.Router();

Listrouter.get('/', getLists);
Listrouter.post('/add-list', createList);
Listrouter.put('/update-list', updateList);
Listrouter.delete('/delete-list/:id', deleteList);

module.exports = Listrouter;