const express = require("express");
const dotenv = require("dotenv");
const { chats } = require('./data/data');
const connectDB = require("./config/db");


const app = express();
dotenv.config();
connectDB()

app.get('/', (req, res) => {
    res.send("App is running")
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
}
)

app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on port ${PORT}`))