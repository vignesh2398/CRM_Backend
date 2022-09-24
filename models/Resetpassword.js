const { compareSync } = require("bcryptjs");
const randomstring= require("randomstring");
const nodemailer=require("nodemailer");



const sendResetPasswordMail=async(name,email,token)=>{
    try {
        const transporter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'vigneshfinal@gmail.com',
                pass:'unkltmsekbbgwquh'
            }
        });
        const mailoptions={
            from:'vigneshfinal@gmail.com',
            to:email,
            subject:'For Reset password',
            html:' Hi '+name+',please copy the link and <a href="https://crm-frontend-7h2j-c9hg55eqk-vignesh2398.vercel.app/newpassword/'+token+'">reset your password</a>'
        }
        transporter.sendMail(mailoptions,function(error,info){
            if(error){
                console.log(error);

            }
            else{
                console.log("mail has ben sent",info.response)
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    sendResetPasswordMail
}