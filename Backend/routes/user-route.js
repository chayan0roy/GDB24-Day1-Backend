const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const { schema } = require('../modules/user');
dotenv.config();

const UserSchema = require('../modules/user');

const generateTokens = require('../utils/generateToken');



router.post('/register', async(req, res)=>{
    try{
        const {email, password} = req.body;

        const isUserExist = await UserSchema.findOne({email})
        if(isUserExist) {
            return res.status(400).json('User Already Exist')
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await UserSchema({email, password:hashPassword})
        newUser.save();

        const {auth_token} = await generateTokens(newUser);

        res.status(200).json({
            auth_token
        })
    } catch(error) {
        console.log(error);
    }
})


router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;

        const isUserExist = await UserSchema.findOne({email})
        if(!isUserExist) {
            return res.status(400).json('User Not Exist')
        }

        const isMatch = await bcrypt.compare(password, isUserExist.password)
        if(!isMatch) {
            return res.status(400).json('User Not Exist')
        }

        const {auth_token} = await generateTokens(isUserExist);

        res.status(200).json({
            auth_token
        })
    } catch(error) {
        console.log(error);
    }
})

router.get('/get-profile', passport.authenticate('jwt', {session:false}), async(req, res)=>{
    try{
        if(req.user) {
            res.status(200).json({user:req.user})
        } else {
            res.status(400).json('User Not Found')
        }
    } catch(error) {
        console.log(error);
    }
})



module.exports = router