import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

export const  signin = async (req , res) =>{
    const {email ,password }= req.body;
    try {
        const existingUser = await User.findOne({email})

        if(!existingUser) return res.status(404).json({message : "User not found"})

        const isPasswordCorrect = await bcrypt.compare(password , existingUser.password)

        if (!isPasswordCorrect) return res.status(404).json({message : "Invalid Credentials"})

        const token = jwt.sign({email : existingUser.email , id:existingUser._id} , 'test', {expiresIn : '1h'}) //test is the token key 

        res.status(200).json({result : existingUser , token})

    } catch (error) {
        res.status(500).json({message : 'Something went wrong'})
        console.log(error)
    }
}

export const  signup = async (req , res) =>{
    const{ firstname , lastname , email , password , confirmPassword } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(404).json({message : "User already existing, try another email"})
       
        if(password !== confirmPassword) return res.status(404).json({message : "Password didn't match "})

        const hashedPassword = await bcrypt.hash(password , 12) //12 is the strength of the hash and t is generally preferred 
       
        const result = await User.create({email , password :hashedPassword , name : `${firstname} ${lastname}`})
       
        const token = jwt.sign({email : result.email , id:result._id} , 'test', {expiresIn : '1h'}) //test is the token key 
       
        res.status(200).json({result , token})

    } catch (error) {
        res.status(500).json({message : 'Something went wrong'})
        console.log(error)
        
    }
    
}