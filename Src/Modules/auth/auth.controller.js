import userModel from "../../../DB/models/user.model.js";
import bcrypt from 'bcryptjs/dist/bcrypt.js'
import jwt from "jsonwebtoken";
import { registerSchema } from "./auth.validation.js";

export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const validationResult = await registerSchema.body.validate(req.body,{abortEarly:false});
        const user = await userModel.findOne({ email });

        if (user) {
            return res.status(409).json({ message: 'email exists' });
        }
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALTROUND));
        
        await userModel.create({ userName, email, password: hashedPassword });
        return res.status(201).json({ message: "success" });
    } catch (err) {
        return res.status(500).json({ message: "catch error", error: err.stack });
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Wrong Data' });
        }
        const match = bcrypt.compareSync(password,user.password);
        if (!match){
            return res.status(404).json({ message: 'Wrong Data' });
        }
        const token = await jwt.sign({id:user._id},process.env.LOGINSIGNATURE);
        return res.status(200).json({message:"success",token});
    } catch (err) {
        return res.status(500).json({ message: "catch error", error: err.stack });
    }
}