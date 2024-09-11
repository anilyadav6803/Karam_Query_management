const express = require('express');
const User=require('../models/user');
const Query=require('../models/query');
const Admin=require('../models/admin');
const adminRoute=express.Router();




adminRoute.post('/adadmin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Admin.findOne({ username });
        if (user) {
            // Check password
            if (user.username === username) {
                // Login successful, return user ID
                return res.send({ msg: "Login Success", id: user._id });
            } else {
                // Invalid password
                return res.send({ msg: "Invalid" });
            }
        } else {
            // Admin not found
            return res.send({ msg: "Admin Not Exist" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error during admin authentication" });
    }
});

adminRoute.get('/ad/viewallpendingquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"pen"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }
   
})

adminRoute.get('/ad/viewallproquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"pro"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }
   
})

adminRoute.get('/ad/viewallcmpquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"cmp"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }   
})

adminRoute.patch('/status/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await Query.findByIdAndUpdate(id, req.body)
        return res.send({ msg: "Success" });
    } catch (error) {
        return res.send({ msg: error });
    }
})

module.exports=adminRoute;
