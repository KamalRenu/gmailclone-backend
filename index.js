const express = require('express');
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/users");
const mailRouter = require("./routes/mailbox");
PORT = process.env.PORT || 3001;

const url = process.env.MONGO_URI;
mongoose.connect(url).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/mailer", mailRouter);