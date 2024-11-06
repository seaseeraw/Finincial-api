import express from 'express'
import { insertUser } from '../models/user/UserModel.js'
const router = express.Router()

// user signup
router.post("/",async(req,res,next)=>{
    try {
       const user = await insertUser(req.body) 
       user?._id?
       res.json({
        status:"success",
        message:"Account created Please login",
       })
       :
       res.json({
        status:"error",
        message:"Error occured.Please try again",
       })
       ;
    } catch (error) {
        res.json({
            status:"error",
            message: error.message,
           }) 
    }
})
// userlogin

// user profile

export default router