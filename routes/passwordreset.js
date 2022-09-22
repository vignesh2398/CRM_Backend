const randomstring= require("randomstring");
const nodemailer=require("nodemailer");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { sendResetPasswordMail } = require("../models/Resetpassword");

router.post('/forget',async(req,res)=>{
    try {
        const userdata =await User.findOne({email:req.body.email})
  
        console.log(userdata)
        if(userdata){
            const randomString= randomstring.generate();
            let email1 =req.body.email
            const data=await User.updateOne({email:email1},{$set:{token:randomString}})
            sendResetPasswordMail(userdata.name,userdata.email,randomString)
            res.status(200).send({
                success:true,
                msg:randomString
            })
        }
        else
        {
          res.status(404).send({
            
            msg:"userdata not found"
        })
        }
    } catch (error) {
      res.status(200).send({
        
        msg:error
      })
      
    }
  });
  //forgot password
 
  
  router.post('/reset',async(req,res)=>{
    try {
      
      const token= req.query.token
      const tokenData=await User.findOne({token:token});
  
      if(tokenData){
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        
        const change= await User.findByIdAndUpdate({ _id:tokenData._id },{$set:{password:hashedPassword,token:' '}},{new:true})
        res.status(200).send({success:true,msg:"password changed"})
      }
      else{
        res.status(400).send({success:false,msg:"wrong token"})
      }
    } catch (error) {
     
      res.status(404).send(error)
    }
  
      
  })
  module.exports = router;