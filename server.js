import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

// connect db
import { conMongoDb } from './config/mongodbConfig.js';
conMongoDb();

// middleware
app.use(express.json());

// Api end points
import userRouter from "./routers/userRouter.js";
// import { conMongoDb } from './config/mongodbConfig.js';
app.use("/api/v1/users",userRouter);

app.get("/",(req,res)=>{
    res.json({
        message:"Its live",
    });
});

app.listen(PORT, error=>{
    error?console.log(error)
    :
    console.log(`Server running on http://localhost:${PORT}`);
})