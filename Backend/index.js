const express = require('express');
const app = express();
app.use(express.json());

const database = require('./config/database');
const UserModel = require('./modules/user')



app.get('/', async (req, res) => {
    try{
        res.status(200).json('Your Server Is Running');
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})



app.get('/getalluser', async (req, res) => {
    try{
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})



app.post('/createnew', async (req, res) => {
    try{
        const {username, email, password} = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({message: 'All Field are Required'});
        }

        const newUser = new UserModel({username, email, password});
        await newUser.save();

        res.status(200).json({message: 'User Created Successfull', user:newUser});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})



app.put('/updatebyemail', async (req, res) => {
    try{
        const {username, email, password} = req.body;

        if(!email) {
            return res.status(400).json({message: 'Email are Required'});
        }

        const updateUser = await UserModel.findOneAndUpdate({email}, {username, password});

        res.status(200).json({message: 'User Updated Successfull', user:updateUser});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})



app.get('/findUserById/:id', async (req, res) => {
    try{
        const {id} = req.params;

        if(!id) {
            return res.status(400).json({message: 'Id are Required'});
        }

        const user = await UserModel.findById(id);

        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})




app.delete('/deletebyid/:id', async (req, res) => {
    try{
        const {id} = req.params;

        if(!id) {
            return res.status(400).json({message: 'Id are Required'});
        }

        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).json({message: 'User Deleted Successfull'});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})




app.delete('/deletebyemail', async (req, res) => {
    try{
        const {email} = req.body;

        if(!email) {
            return res.status(400).json({message: 'Email are Required'});
        }

        const updateUser = await UserModel.findOneAndDelete({email});

        res.status(200).json({message: 'User Deleted Successfull'});
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})




app.listen(5000, () => {
    console.log('Server Running on port 5000');
})
















// {
//     "username": "Chayan",
//     "email": "tochayan@gmail.com",
//     "password": "asdfgh"
// }