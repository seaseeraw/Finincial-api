import express from 'express'
import { insertUser } from '../models/user/UserModel.js'
import { hashPassword } from '../utils/bcrypt.js'
const router = express.Router()

// user signup
router.post("/",async(req,res,next)=>{
    try {
// encrypt the passsword
req.body.password = hashPassword(req.body.password);
console.log(req.body.password);

// insert user
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
        let msg = error.message;
        if(msg.includes("E11000 dupliate key collection")){
            msg="there is another user";
        }
        res.json({
            status:"error",
            message: msg,
           });
    }
})
// userlogin

// user profile

export default router