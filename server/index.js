const express = require('express');
const connectDb = require("./db/connectDb");
const app = express();
const cors = require("cors");
require("dotenv").config();



app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const port= process.env.PORT || 5000
const url = process.env.MONGO_URI;
const userRouter = require('./routes/user');


app.use('/',userRouter);



//Start Server

const startServer = async () => {
    try {
      connectDb(url);
      app.listen(port, () => {
        console.log(`App is successfully Listening on ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();