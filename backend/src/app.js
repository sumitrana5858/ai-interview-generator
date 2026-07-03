const express = require('express');
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database"); 
const cookie = require("cookie-parser")
const cors = require("cors")




connectDB();
app.use(express.json());
app.use(cookie());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://ai-interview-generator-1-bkcc.onrender.com"
    ],
    credentials: true,
}));
dotenv.config();

const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");
const { connect } = require('mongoose');
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
