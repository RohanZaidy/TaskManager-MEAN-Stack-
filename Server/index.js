let express = require('express');
let mongoose = require('mongoose');
let Taskrouter = require('./Routes/TaskRoutes');
const Listrouter = require('./Routes/ListRoutes');
let cors = require('cors');
require('dotenv').config();

let app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DbUrl).then(() =>{
    console.log("Connected to database");
    app.listen(process.env.Port);
})

app.use('/lists',Listrouter);
app.use('/tasks',Taskrouter)