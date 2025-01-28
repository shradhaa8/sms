const express = require('express')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const {body, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const router = express.Router()
require("dotenv").config

const JWT_SECRET ="process.env.SECRET"

router.post("/login", [
    body("email").isEmail(),
    body("password").isLength({min:5})
], async(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {email, password} = req.body
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: "please register your email first"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare)
        {
            return res.status(400).json({error: "your password is not matching"})  
        }
        const data ={
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken);
        

        res.json({user, authToken})
        
    } catch (error) {
        res.status(500).send("internal server error")
        
    }

})

module.exports = router